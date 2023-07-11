const axios = require('axios');

const API_KEY = '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'; // Replace with your actual API key

async function generateText(prompt) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt,
        max_tokens: 100,
        temperature: 0.7,
        n: 1,
        stop: '\n',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    const generatedText = response.data.choices[0].text.trim();
    return generatedText;
  } catch (error) {
    console.error('Error generating text:', error);
    throw error;
  }
}

module.exports = { generateText };
