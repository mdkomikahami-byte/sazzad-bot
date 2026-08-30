const TelegramBot = require('node-telegram-bot-api');
const token = '8412546153:AAHxLEAIz0Y_DzzjVJ0fmjv0gGhJmQUR1vw';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const stickerUrl = 'https://raw.githubusercontent.com/TelegramBots/book/master/src/docs/sticker-fred.webp';

  bot.sendSticker(chatId, stickerUrl).catch(() => {}).finally(() => {
    const options = {
      reply_markup: {
        inline_keyboard: [
          [{ text: '👤 User', callback_data: 'user' }, { text: '💰 Deposit', callback_data: 'deposit' }],
          [{ text: '💸 Withdraw', callback_data: 'withdraw' }, { text: '❓ Help', callback_data: 'help' }]
        ]
      }
    };
    bot.sendMessage(chatId, 'হ্যালো! মূল মেনুতে আপনাকে স্বাগতম। নিচের বাটনগুলো থেকে আপনার পছন্দ নির্বাচন করুন:', options);
  });
});

bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === 'user') {
    bot.sendMessage(chatId, 'এটি আপনার প্রোফাইল। আপনার বিস্তারিত তথ্য এখানে দেখাবে।');
  } else if (data === 'deposit') {
    bot.sendMessage(chatId, 'ডিপোজিট করার জন্য আপনার পেমেন্ট মেথড নির্বাচন করুন।');
  } else if (data === 'withdraw') {
    bot.sendMessage(chatId, 'উত্তোলন করার জন্য আপনার ব্যালেন্স এবং মাধ্যম দিন।');
  } else if (data === 'help') {
    bot.sendMessage(chatId, 'যেকোনো সাহায্যের জন্য আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।');
  }

  bot.answerCallbackQuery(query.id);
});
