import readline from 'readline';
import {
  getUserName,
  setStartPath,
  showByeMessage,
  showCurrentPath,
  showErrorMessage,
  showHelloMessage,
  showOperationError
} from './helpers.js';
import { commandSwitcher } from './switcher.js';

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
    showErrorMessage();
}

rl.on('line', (line) => {
  const [key, option] = line.split(' ');

  try {
    commandSwitcher(key, option, rl);
  } catch (e) {
    showOperationError();
  }
});

rl.on('close', () => {
  showByeMessage(name);
});
