const Discord = require('discord.js');
const botConfig = require('../config/botconfig.json');

const asyncBotMsg = 'async-bot-msg';
const asyncBotReply='async-bot-reply';

module.exports =(bot, ipcMain)=>{

    require('../bot-api/startup/index')(bot);

    require('../bot-api/messages/index')(bot);

    ipcMain.on('async-bot-msg', (event,args) =>{
        if (args === 'botCreate') {
            new Promise ((acc, rej)=>{
                acc(bot.login(botConfig.token));
            }).then((response) =>{
                event.sender.send('async-bot-reply', `${bot.user.username} is online!`)
            });
        } else if (args === 'botDestroy'){
            bot.destroy().then((response) =>{
                event.sender.send('async-bot-reply', 'bot killed')
            });
        }
    });
    
}