const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '5438133696:AAHKJ7pLWrC-6Z2RQlmbC9RSm3CADvCO5UY';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', async mes => {
  const text = mes.text;
  const user = mes.from.first_name;
  const chatId = mes.chat.id;

  if (text === '/start') {
    await bot.sendMessage(chatId, `Даров, ${user}!`);
    await bot.sendSticker(
      chatId,
      'https://tlgrm.ru/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/1.webp',
    );
  }
});
