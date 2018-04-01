const electron = require('electron');  
const {app, BrowserWindow} = electron;

const botConfig = require('./discordant/config/botconfig.json');
const Discord = require('discord.js');

const bot = new Discord.Client({disableEveryone: true});
let win;

createWindow = () =>{
    win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#fff',
        icon: `file://${__dirname}/dist/assets/logo.png`
    });

    win.loadURL(`file://${__dirname}/dist/index.html`)

    win.on('closed', () =>{
        win = null
    });

}

windowClosed = () =>{
    if(process.platform !== 'darwin') {
        app.quit();
    }
}

// Discord JS settings

bot.on('ready', async () =>{
    console.log(`${bot.user.username} is online!`);
});

bot.on('message', async message =>{
    if(message.author.bot || message.channel.type === 'dm') return

    let prefix = botConfig.botCommands.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    console.log(messageArray);
    console.log(prefix);

    if (cmd === `${prefix}hello`) {
        return message.channel.send('Hello World');
    }

});

bot.login(botConfig.token);

// Main Electon App Settings
app.on('ready', createWindow);

app.on('window-all-closed', windowClosed);

app.on('activate', () =>{
    if(win === null ) {
        createWindow();
    }
});