// integration.js
require('dotenv').config();
const { ClaudeCode } = require('@anthropic-ai/claude-code');

const claude = new ClaudeCode({
  apiKey: process.env.ANTHROPIC_API_KEY
});

async function integrateZaiWithClaude(zaiData) {
  const response = await claude.generate({
    prompt: `Analisis data Zai ini: ${JSON.stringify(zaiData)}`,
    maxTokens: 1000
  });
  
  return response.text;
}

// Contoh penggunaan
const zaiSampleData = {
  user: "contoh_user",
  action: "purchase",
  items: ["product1", "product2"]
};

integrateZaiWithClaude(zaiSampleData)
  .then(result => console.log("Hasil Claude:", result))
  .catch(error => console.error("Error:", error));