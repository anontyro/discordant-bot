const electron = require('electron');  
const {app, BrowserWindow} = electron;
const botConfig = require('./discordant/config/botconfig.json');
const Discord = require('discord.js');

const botApi = require('./discordant/bot-api/index.js');
const electronApi = require('./discordant/electron-api/index.js');

const bot = new Discord.Client({disableEveryone: true});

// General Application window setup for electron

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
require('./discordant/bot-api/index')(bot);

// Main Electon App Settings
app.on('ready', createWindow);

app.on('window-all-closed', windowClosed);

app.on('activate', () =>{
    if(win === null ) {
        createWindow();
    }
});