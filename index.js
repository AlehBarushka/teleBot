const { Telegraf, Scenes, Markup, session } = require('telegraf');

const TOKEN = '5438133696:AAHKJ7pLWrC-6Z2RQlmbC9RSm3CADvCO5UY';
const WEB_APP_URL = 'https://07ea-37-45-17-8.eu.ngrok.io';

const bot = new Telegraf(TOKEN);

bot.start(async (ctx) => {
  console.log('sad');
  await ctx.reply(
    'Хочу разместить',
    Markup.keyboard([['Разместить вакансию'], ['Разместить резюме', 'Разместить рекламу']])
      .oneTime()
      .resize()
  );
});

bot.launch();
