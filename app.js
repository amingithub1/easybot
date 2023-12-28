require('dotenv').config()
const {Telegraf, Markup} = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('start', async (ctx) => {
    ctx.telegram.sendMessage(ctx.message.chat.id, "hi")
        .then(message => console.log(message.message_id))
        .catch(err => console.log(err.message))
})


bot.command('ok', async (ctx) => {
    ctx.telegram.sendMessage(
        ctx.message.chat.id,
        "OK 2",
        Markup
        .keyboard(['/simple', '/inline', '/pyramid'])
        .oneTime()
        .resize()
        )
        .then(message => console.log(message.message_id))
        .catch(err => console.log(err.message))
})

bot.command(["simple", "inline", "pyramid"], ctx => {
    ctx.reply("Command")
})
bot.launch()

const http = require('http');

const server = http.createServer((req, res) => {
  // Check if the request URL is "/"
  if (req.url === '/') {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the "Hello, World!" response
    res.end('Hello, World!\n');
  } else {
    // For other URLs, send a 404 Not Found response
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

// Set the port number for the server to listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

