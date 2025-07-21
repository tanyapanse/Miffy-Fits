require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
});

const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 350,
        height: 540,
        frame: true,
        title: "Miffy Fits",
        titleBarStyle: 'default',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
});
