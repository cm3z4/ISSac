// Handle setupEvents as quickly as possible.
const setupEvents = require('./installers/windows/setupEvents');

if (setupEvents.handleSquirrelEvent()) {
    // Squirrel events are handled and the application will exit in 1000ms, so don't do anything else.
    return;
};

const { app, BrowserWindow, BrowserView } = require('electron');

let path = require('path');

app.on('ready', function () {

    let window = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, 'assets/icons/png/1024x1024.png')
    });

    window.on('closed', () => {
        win = null;
    });

    let streamView = new BrowserView();
    window.setBrowserView(streamView);
    streamView.setBounds({ x: 0, y: 0, width: 800, height: 600 });
    streamView.webContents.loadURL('http://www.ustream.tv/embed/17074538');
    streamView.setAutoResize({
        width: true,
        height: true
    });

});

// Kill all processes after quitting the application.
app.on('window-all-closed', () => {
    app.quit();
});
