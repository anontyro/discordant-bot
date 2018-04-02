// electron imports
const electron = require('electron');  
const {app, BrowserWindow} = electron;
const ipcMain = electron.ipcMain;

// bot imports
const botConfig = require('./discordant/config/botconfig.json');
const Discord = require('discord.js');

// api imports
const botApi = require('./discordant/bot-api/index.js');
const electronApi = require('./discordant/electron-api/index.js');

const bot = new Discord.Client({disableEveryone: true});

// General Application window setup for electron

let win;

// Discord JS settings
require('./discordant/bot-api/index')(bot);

// electron setup
require('./discordant/electron-api/index')(app);

// IPC Renderer
require('./discordant/electron-api/frontend-api/index')(ipcMain);
