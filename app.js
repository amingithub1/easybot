require('dotenv').config()

const { Telegraf } = require('telegraf');
const sdk = require("node-appwrite");

const client = new sdk.Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(process.env.YOUR_APPWRITE_PROJECT_ID) // Replace with your Appwrite project ID
    .setKey(process.env.YOUR_APPWRITE_API_KEY); // Replace with your Appwrite API key



const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome to your Telegram bot!'));

bot.command('hello', (ctx) => ctx.reply('Hello!'));

bot.on('text', async (ctx) => {
  const message = ctx.message.text;

  // Example: Save the received message to Appwrite collection
  await client
    .database.createDocument('collections_id', { message })
    .then(() => console.log('Message saved to Appwrite'));

  // Example: Echo the received message
  ctx.reply(`You said: ${message}`);
});

bot.launch();
