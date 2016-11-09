const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

app.on('ready', main);

function main() {
    const window = new BrowserWindow({ width: 1240, height: 720 });
    const displayPath = path.join(__dirname, '../display');
    window.loadURL(path.join(displayPath, 'dashboard.html'));
    window.webContents.openDevTools();
}