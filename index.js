const TelegramBot = require('node-telegram-bot-api');
const token = '8412546153:AAHxLEAIz0Y_DzzjVJ0fmjv0gGhJmQUR1vw';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'হ্যালো! আমি সাজ্জাদের তৈরি করা নতুন বট। আমি ঠিকমতো কাজ করছি!');
});
