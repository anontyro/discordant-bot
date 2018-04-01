const Discord = require('discord.js');
const botConfig = require('../config/botconfig.json');


module.exports =(bot)=>{

    require('../bot-api/startup/index')(bot);

    require('../bot-api/messages/index')(bot);
    
    bot.login(botConfig.token);
}