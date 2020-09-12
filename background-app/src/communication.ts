import { ipcMain, BrowserWindow } from 'electron';
import { fileUtils } from './file';

let window: BrowserWindow | null = null;

const Event = {
  checkConfigRequest: 'check-config-request',
  checkConfigResponse: 'check-config-response',
};

function sendDataToWindow(event: string, data: any): void {
  if (window) {
    window.webContents.send(event, data);
  }
}

ipcMain.on(Event.checkConfigRequest, async () => {
  try {
    const exists = await fileUtils.hasConfig();
    sendDataToWindow(Event.checkConfigResponse, { exists });
  } catch (err) {
    sendDataToWindow(Event.checkConfigResponse, { err });
  }
});

function setWindow(win: BrowserWindow | null): void {
  window = win;
}

export const communication = {
  setWindow,
  sendDataToWindow,
};
