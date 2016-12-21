var TelegramBot = require('node-telegram-bot-api');
const token = process.env.token;



// replace the value below with the Telegram token you receive from @BotFather

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });


bot.on("text", (message) => {
  bot.sendMessage(message.chat.id, "Hello world");
});
