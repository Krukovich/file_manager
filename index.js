import readline from 'readline';
import {
  getUserName,
  setStartPath,
  showByeMessage,
  showCurrentPath,
  prepareCommands,
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
  const { command, options } = prepareCommands(line);

  try {
    commandSwitcher(command, options, rl);
  } catch (e) {
    showOperationError();
  }
});

rl.on('close', () => {
  showByeMessage(name);
});

//TODO ASK ABOUT MODULES
