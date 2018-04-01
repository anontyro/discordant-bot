const electron = require('electron');  
const {app, BrowserWindow} = electron;

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

app.on('ready', createWindow);

app.on('window-all-closed', windowClosed);

app.on('activate', () =>{
    if(win === null ) {
        createWindow();
    }
});