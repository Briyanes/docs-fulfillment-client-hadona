require('dotenv').config();

require('dotenv').config(); // Tambahkan ini di baris pertama

// Import paket Anthropic
const Anthropic = require('@anthropic-ai/claude-code');

// ... kode lainnya ...

// Import paket Anthropic
const Anthropic = require('@anthropic-ai/claude-code');

// Buat instance client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY // Gunakan API key dari .env
});

async function integrateZaiWithClaude(zaiData) {
  const response = await anthropic.messages.create({
    model: "claude-3-sonnet-20240229",
    max_tokens: 1000,
    messages: [{
      role: "user",
      content: `Analisis data Zai ini: ${JSON.stringify(zaiData)}`
    }]
  });
  
  return response.content[0].text;
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