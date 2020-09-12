import { ipcRenderer } from 'electron';

const Event = {
  checkConfigRequest: 'check-config-request',
  checkConfigResponse: 'check-config-response',
};

function checkConfig(): Promise<boolean> {
  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject): void => {
    ipcRenderer.once(
      Event.checkConfigResponse,
      (event, { error, data }): void => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      },
    );
  });
}

export const communicationUtils = {
  checkConfig,
};
