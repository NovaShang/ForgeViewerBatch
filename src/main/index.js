import { app, BrowserWindow } from 'electron'

let mainWindow;

if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\');
}

const winURL = process.env.NODE_ENV === 'development' ?
    `http://localhost:9080` :
    `file://${__dirname}/index.html`

function createWindow() {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 550,
        minWidth: 500,
        title: "Autodesk Forge 批量转换工具"
    });
    mainWindow.setMenuBarVisibility(false);
    mainWindow.loadURL(winURL);
}



app.on('ready', createWindow);
app.on('window-all-closed', () => app.quit());