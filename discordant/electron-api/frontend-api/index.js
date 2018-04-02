const ipcMain = require('electron').ipcMain;

module.exports =(ipcMain)=> {
    ipcMain.on('message', (event, args) =>{
        console.log(args);
    });
}
