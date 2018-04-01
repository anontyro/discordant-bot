const Discord = require('discord.js');
const botConfig = require('../../config/botconfig.json');


module.exports = (bot) =>{

    bot.on('message', async message =>{
        if(message.author.bot || message.channel.type === 'dm') return
    
        let prefix = botConfig.botCommands.prefix;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);
    
        if (cmd === `${prefix}hello`) {
            return message.channel.send('Hello World');
        }
    
    });
    
}