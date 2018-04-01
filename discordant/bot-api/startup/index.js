const Discord = require('discord.js');
const botConfig = require('../../config/botconfig.json');

module.exports =(bot)=>{
    bot.on('ready', async () =>{
        console.log(`${bot.user.username} is online!`);
    });
}