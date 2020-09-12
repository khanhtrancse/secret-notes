"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var communication_1 = require("./communication");
function createWindow() {
    // Create the browser window.
    var win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    // and load the index.html of the app.
    // win.loadFile('../index.html');
    win.loadURL('http://localhost:4000');
    // Open the DevTools.
    win.webContents.openDevTools();
    communication_1.communication.setWindow(win);
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.whenReady().then(function () {
    createWindow();
    electron_1.app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (electron_1.BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on('window-all-closed', function () {
    communication_1.communication.setWindow(null);
    // eslint-disable-next-line no-undef
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
