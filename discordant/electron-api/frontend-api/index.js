const ipcMain = require('electron').ipcMain;

module.exports =(ipcMain,)=> {
    ipcMain.on('async-message', (event, args) =>{
        console.log(args);
    });


}
