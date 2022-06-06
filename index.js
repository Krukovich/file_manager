import readline from 'readline';
import {
  getUserName,
  setStartPath,
  showByeMessage,
  showCurrentPath,
  showHelloMessage
} from './helpers.js';

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
  showCurrentPath();

  if (line === '.exit') {
    rl.close();
  }
});

rl.on('close', () => {
  showByeMessage(name);
});
