const TelegramBot = require('node-telegram-bot-api');
const token = '8412546153:AAHxLEAIz0Y_DzzjVJ0fmjv0gGhJmQUR1vw';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const stickerUrl = 'https://raw.githubusercontent.com/TelegramBots/book/master/src/docs/sticker-fred.webp';

  bot.sendSticker(chatId, stickerUrl).catch(() => {}).finally(() => {
    const options = {
      reply_markup: {
        keyboard: [
          ['👤 User', '💰 Deposit'],
          ['💸 Withdraw', '❓ Help']
        ],
        resize_keyboard: true,
        one_time_keyboard: false
      }
    };
    bot.sendMessage(chatId, 'হ্যালো! মূল মেনুতে আপনাকে স্বাগতম। নিচের বাটনগুলো থেকে আপনার পছন্দ নির্বাচন করুন:', options);
  });
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '👤 User') {
    bot.sendMessage(chatId, 'এটি আপনার প্রোফাইল। আপনার বিস্তারিত তথ্য এখানে দেখাবে।');
  } else if (text === '💰 Deposit') {
    bot.sendMessage(chatId, 'ডিপোজিট করার জন্য আপনার পেমেন্ট মেথড নির্বাচন করুন।');
  } else if (text === '💸 Withdraw') {
    bot.sendMessage(chatId, 'উত্তোলন করার জন্য আপনার ব্যালেন্স এবং মাধ্যম দিন।');
  } else if (text === '❓ Help') {
    bot.sendMessage(chatId, 'যেকোনো সাহায্যের জন্য আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।');
  }
});
