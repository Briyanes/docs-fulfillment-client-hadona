// Z.ai API Client for AI-powered search enhancement
// Documentation: https://docs.z.ai/api-reference/llm/chat-completion

export interface ZaiMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export interface ZaiChoice {
  message: {
    content: string
    role: string
  }
  finish_reason: string
  index: number
}

export interface ZaiResponse {
  id: string
  created: number
  model: string
  choices: ZaiChoice[]
  usage?: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}

export interface ZaiError {
  error: {
    message: string
    type: string
    code?: string
  }
}

// Z.ai API Configuration
const ZAI_CONFIG = {
  baseURL: 'https://api.z.ai/api/paas/v4',
  model: 'glm-4.6', // GLM-4.6 model
  timeout: 5000, // 5 seconds
  maxRetries: 2,
  retryDelay: 1000, // Base delay in ms
} as const

/**
 * Custom error class for Z.ai API errors
 */
export class ZaiAPIError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public type?: string
  ) {
    super(message)
    this.name = 'ZaiAPIError'
  }
}

/**
 * Check if Z.ai API is configured
 */
export function isZaiAvailable(): boolean {
  const apiKey = process.env.ZAI_API_KEY
  return !!apiKey && apiKey !== 'your_zai_api_key_here'
}

/**
 * Sleep utility for retry delay
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Make a chat completion request to Z.ai API
 *
 * @param messages - Array of message objects with role and content
 * @param temperature - Sampling temperature (0-1), lower for more deterministic
 * @param maxTokens - Maximum tokens to generate
 * @returns Promise<ZaiResponse>
 *
 * @throws {ZaiAPIError} When API request fails
 */
export async function callZaiAPI(
  messages: ZaiMessage[],
  temperature = 0.3,
  maxTokens = 1000
): Promise<ZaiResponse> {
  // Check if API key is configured
  if (!isZaiAvailable()) {
    throw new ZaiAPIError('ZAI_API_KEY not configured', 0, 'configuration_error')
  }

  let lastError: Error | null = null

  // Retry logic with exponential backoff
  for (let attempt = 0; attempt <= ZAI_CONFIG.maxRetries; attempt++) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), ZAI_CONFIG.timeout)

      const response = await fetch(`${ZAI_CONFIG.baseURL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.ZAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: ZAI_CONFIG.model,
          messages,
          temperature,
          max_tokens: maxTokens,
        }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      // Handle non-OK responses
      if (!response.ok) {
        const errorData: ZaiError = await response.json().catch(() => ({
          error: { message: 'Unknown error', type: 'unknown_error' }
        }))

        // Don't retry on authentication or invalid request errors
        if (response.status === 401 || response.status === 400) {
          throw new ZaiAPIError(
            errorData.error.message,
            response.status,
            errorData.error.type
          )
        }

        // Retry on rate limit (429) or server errors (5xx)
        throw new ZaiAPIError(
          errorData.error.message,
          response.status,
          errorData.error.type
        )
      }

      const data: ZaiResponse = await response.json()
      return data

    } catch (error) {
      lastError = error as Error

      // Don't retry on abort or network errors
      if (error instanceof Error && error.name === 'AbortError') {
        throw new ZaiAPIError('Request timeout', 0, 'timeout')
      }

      if (error instanceof ZaiAPIError) {
        const isRetryable = error.statusCode === 429 ||
                           (error.statusCode && error.statusCode >= 500)

        if (!isRetryable || attempt === ZAI_CONFIG.maxRetries) {
          throw error
        }
      }

      // Exponential backoff before retry
      if (attempt < ZAI_CONFIG.maxRetries) {
        await sleep(ZAI_CONFIG.retryDelay * Math.pow(2, attempt))
      }
    }
  }

  // This should never be reached, but TypeScript needs it
  throw lastError || new ZaiAPIError('Max retries exceeded')
}

/**
 * Log Z.ai API error for monitoring
 */
export function logZaiError(error: Error, context: string): void {
  console.error({
    source: 'zai-api',
    error: error.message,
    context,
    timestamp: new Date().toISOString(),
  })

  // Optional: Send to monitoring service (e.g., Sentry, Vercel Analytics)
}