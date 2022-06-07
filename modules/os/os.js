import os from 'os';
import { showErrorMessage } from '../../helpers.js';

export const getSystemInfo = (options) => {
  const [key] = options;

  switch (key) {
    case '--EOL':
      //TODO ADD LOGIC FOR SHOW THIS INFORMATION
      break;
    case '--cpus':
      console.log(os.cpus());
      break;
    case '--homedir':
      console.log(os.homedir());
      break;
    case '--username':
      console.log(os.userInfo().username);
      break;
    case '--architecture':
      console.log(os.arch());
      break;
    default:
      showErrorMessage();
  }
};
