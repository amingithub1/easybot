require('dotenv').config()
const {Telegraf} = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('start', async (ctx) => {
    ctx.telegram.sendMessage(ctx.message.chat.id, "hi")
        .then(message => console.log(message.message_id))
        .catch(err => console.log(err.message))
})

bot.launch()