import readline from 'readline';
import {
  getUserName,
  setStartPath,
  showByeMessage,
  showCurrentPath,
  showHelloMessage
} from './helpers.js';
import { createFiles } from './modules/files/create.js';
import { showAll } from './modules/navigation/ls.js';
import { goUpper } from './modules/navigation/up.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const args = getUserName(process.argv);
const [key, name] = args;

switch (key) {
  case '--username':
    setStartPath();
    showHelloMessage(name)
    showCurrentPath();
    break;
  default:
    console.log('Sorry, that is not something I know how to do.');
}

rl.on('line', (line) => {
  const [key, option] = line.split(' ');

  switch (key) {
    case 'up':
      goUpper();
      showCurrentPath();
      break;
    case 'ls':
      showAll();
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
      console.log('Sorry, that is not something I know how to do.');
  }
});

rl.on('close', () => {
  showByeMessage(name);
});
