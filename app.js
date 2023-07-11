const readline = require('readline');
const { generateText } = require('./gptService');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(prompt) {
  return new Promise((resolve, reject) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

async function chatLoop() {
  while (true) {
    try {
      const userPrompt = await askQuestion('User: ');
      const response = await generateText(userPrompt);
      console.log('ChatGPT:', response);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
}

async function startChat() {
  console.log('Welcome to ChatGPT CLI!');
  console.log('Enter your message below:');

  try {
    await chatLoop();
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    rl.close();
  }
}

startChat();
