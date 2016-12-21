var TelegramBot = require('node-telegram-bot-api');
const token = process.env.token;


const channelID = process.env.channelID;
const port = process.env.PORT || 8443;
const host = process.env.HOST;

const webhook = {
	webHook: {
		port: port,
		host: host
	}
}

// replace the value below with the Telegram token you receive from @BotFather

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, webhook);

bot.onText(/\/echo (.+)/, function (msg, match) {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  var chatId = msg.chat.id;
  var resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', function (msg) {
  var chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "Received your message");
});