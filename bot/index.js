const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '5438133696:AAHKJ7pLWrC-6Z2RQlmbC9RSm3CADvCO5UY';
const WEB_APP_URL = 'https://telegram-webapp.netlify.app';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', async (mes) => {
  const text = mes.text;
  const chatId = mes.chat.id;

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Даров!', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Заполнить форму', web_app: { url: WEB_APP_URL } }],
        ],
      },
    });
  }
});
