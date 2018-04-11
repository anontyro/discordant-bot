const Discord = require('discord.js');
const botConfig = require('../config/botconfig.json');

const asyncBotMsg = 'async-bot-msg';
const asyncBotReply='async-bot-reply';

module.exports =(bot, ipcMain)=>{

    require('../bot-api/startup/index')(bot);

    require('../bot-api/messages/index')(bot);

    ipcMain.on('async-bot-msg', (event,args) =>{
        
        let botResponse = {
            "name" : '',
            "timestamp": Date.now(),
            "action": '',
            "message": ''
        }
        if (args === 'botCreate') {
            new Promise ((acc, rej)=>{
                acc(bot.login(botConfig.token));
            }).then((response) =>{
                botResponse.name = bot.user.username;
                botResponse.action = "create";
                event.sender.send('async-bot-reply', JSON.stringify(botResponse))

                // event.sender.send('async-bot-reply', `name : ${bot.user.username}`)
                // event.sender.send('async-bot-reply', JSON.stringify(resp))
                
            },(err) =>{
                console.log(err);
            });
        } else if (args === 'botDestroy') {
            bot.destroy().then((response) =>{
                botResponse.name = bot.user.username;
                botResponse.action="destroy";
                event.sender.send('async-bot-reply', JSON.stringify(botResponse))
            });
        } else if (args.includes('botName')) {
            const newName = args.split(':')[1].trim();
            console.log('bot name set to: ' + newName);
            bot.user.setUsername(newName);

            botResponse.name = bot.user.username;
            botResponse.action = "name change"
            event.sender.send('async-bot-reply', JSON.stringify(botResponse))
            // event.sender.send('async-bot-reply', JSON.stringify(resp));
        }

        
        
    });
    
}