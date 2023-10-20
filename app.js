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


