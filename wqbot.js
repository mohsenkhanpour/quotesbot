require('dotenv').config()
const TeleBot = require('telebot');
const bot = new TeleBot(process.env.BOT_TOKEN);

let wiki = require("wikiquotesjs")
let name = "Albert Einstein"
wiki.getQuotesName(name).then(result => {
  console.log(result)
});
