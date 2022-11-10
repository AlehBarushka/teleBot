const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '5438133696:AAHKJ7pLWrC-6Z2RQlmbC9RSm3CADvCO5UY';
const WEB_APP_URL = 'https://07ea-37-45-17-8.eu.ngrok.io';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', async (mes) => {
  const text = mes.text;
  const chatId = mes.chat.id;
  const username = mes.from.username;

  if (text === '/start') {
    await bot.sendMessage(chatId, `Привет, ${username}!`, {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Давай поиграем)', web_app: { url: WEB_APP_URL } }],
        ],
      },
    });
  }
});
