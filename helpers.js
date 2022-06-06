import os from 'os';

export const showCurrentPath = () => {
  console.log(`You are currently in ${process.cwd()}`);
};

export const showHelloMessage = (name) => {
  console.log(`Welcome to the File Manager, ${name}!`);
};

export const showErrorMessage = () => {
  console.log('Invalid input');
};

export const showOperationError = () => {
  console.log('Operation failed');
};

export const showByeMessage = (name) => {
  console.log(`Thank you for using File Manager, ${name}!`);
};

export const getUserName = (args) => {
  return args.slice(2)[0].split('=');
};

export const setStartPath = () => {
  const userName = os.userInfo().username;
  process.chdir(`/Users/${userName}`);
};
