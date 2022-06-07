import { goUpper } from './modules/navigation/up.js';
import { showCurrentPath, showErrorMessage } from './helpers.js';
import { showAll } from './modules/navigation/ls.js';
import { changeDirectory } from './modules/navigation/cd.js';
import { createFiles } from './modules/files/create.js';
import { cat } from './modules/files/cat.js';
import { renameFiles } from './modules/files/rename.js';
import { deleteFile } from './modules/files/delete.js';
import { copyFiles } from './modules/files/copy.js';
import { getSystemInfo } from './modules/os/os.js';
import { getHashFromFile } from './modules/hash/hash.js';
import { compressFile } from './modules/compress/compress.js';
import { decompressFile } from './modules/compress/decompress.js';

export const commandSwitcher = (key, option, rl) => {
  switch (key) {
    case 'up':
      goUpper();
      showCurrentPath();
      break;
    case 'ls':
      showAll();
      showCurrentPath();
      break;
    case 'cd':
      changeDirectory(option);
      showCurrentPath();
      break;

    case 'cat':
      cat(option);
      showCurrentPath();
      break;
    case 'add':
      createFiles(option);
      showCurrentPath();
      break;
    case 'rn':
      renameFiles(option);
      showCurrentPath();
      break;
    case 'cp':
      copyFiles(option);
      showCurrentPath();
      break;
    //TODO ADD LOGIC FOR MOVE FILES
    case 'mv':
      showCurrentPath();
      break;
    case 'rm':
      deleteFile(option);
      showCurrentPath();
      break;

    case 'os':
      getSystemInfo(option);
      showCurrentPath();
      break;

    case 'hash':
      getHashFromFile(option);
      showCurrentPath();
      break;

    case 'compress':
      compressFile(option).then(() => {
        showCurrentPath();
      });
      break;
    case 'decompress':
      decompressFile(option).then(() => {
        showCurrentPath();
      });
      break;

    case '.exit':
      rl.close();
      break;
    default:
      showErrorMessage();
  }
};
