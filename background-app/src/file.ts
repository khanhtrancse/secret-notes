import fs from 'fs';
import { setting } from './setting';

function hasConfig(): Promise<boolean> {
  // eslint-disable-next-line no-undef
  return new Promise((resolve) => {
    fs.exists(
      setting.workspace + '/' + setting.encryptedDataFileName,
      (exist): void => {
        resolve(exist);
      },
    );
  });
}

function unzipData(): void {
  //todo
}

export const fileUtils = {
  hasConfig,
  unzipData,
};
