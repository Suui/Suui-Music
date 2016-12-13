const electron = require('electron');
const fs = require('fs');

const { app, BrowserWindow, ipcMain } = electron;

app.on('ready', main);

function main() {
    const window = new BrowserWindow({ width: 1240, height: 720 });
    const albumFolders = fs.readdirSync('S:/Desktop/Suui Music');
    console.log(albumFolders);

    window.loadURL(`file://${__dirname}/display/dashboard.html`);
}

ipcMain.on('/albums/get', () => {
});