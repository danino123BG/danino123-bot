const Discord = require('discord.js');
const bot = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

bot.login('NTAxMDI4NTg5MTAyNDMyMjg3.DtquIA.T7Hwnz5lNlTUZsCJz7klyvhIP_0');


