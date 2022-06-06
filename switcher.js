import { goUpper } from './modules/navigation/up.js';
import { showCurrentPath, showErrorMessage } from './helpers.js';
import { showAll } from './modules/navigation/ls.js';
import { changeDirectory } from './modules/navigation/cd.js';
import { createFiles } from './modules/files/create.js';

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

    case 'add':
      createFiles(option);
      showCurrentPath();
      break;
    case '.exit':
      rl.close();
      break;
    default:
      showErrorMessage();
  }
};
