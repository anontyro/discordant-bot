const electron = require('electron');  
const {app, BrowserWindow} = electron;
const appConsts = require('../../app-consts');

createWindow = () =>{
    win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#fff',
        icon: appConsts.IconDir
    });

    win.loadURL(appConsts.angularDir)

    win.on('closed', () =>{
        win = null
    });
}

windowClosed = () =>{
    if(process.platform !== 'darwin') {
        app.quit();
    }
}

module.exports=(app)=> {

    // Main Electon App Settings
    app.on('ready', createWindow);

    app.on('window-all-closed', windowClosed);

    app.on('activate', () =>{
        if(win === null ) {
            createWindow();
        }
    });

}