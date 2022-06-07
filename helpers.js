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
  process.chdir(os.homedir());
};

export const prepareCommands = (line) => {
  const prepareLine = line.split(' ');
  const [command] = prepareLine;
  prepareLine.shift();
  const options = prepareLine.filter((line) => line !== undefined && line !== '' && line !== ' ');

  return {
    command,
    options,
  }
};

function Commands (commands, rule, example) {
  this.commands = commands;
  this.rule = rule;
  this.example = example;
}

export const showCommands = () => {
  const up = new Commands('up', 'up', 'up');
  const cd = new Commands('cd', 'cd path_to_directory', 'cd Download/image or cd ..');
  const ls = new Commands('ls', 'ls', 'ls');
  const cat = new Commands('cat', 'cat path_to_file', 'cat file.txt');
  const add = new Commands('add', 'add new_file_name', 'add newFile.txt');
  const rn = new Commands('rn', 'rn path_to_file new_filename', 'rn oldFile.txt newFile.txt');
  const cp = new Commands('cp', 'cp path_to_file path_to_new_directory', 'cp file.txt User/Documents');
  const mv = new Commands('mv', 'mv path_to_file path_to_new_directory', 'mv file.txt User/Documents');
  const rm = new Commands('rm', 'rm path_to_file', 'rm file.txt');
  const eol = new Commands('os', 'os --EOL', 'os --EOL');
  const cpus = new Commands('os', 'os --cpus', 'os --cpus');
  const homedir = new Commands('os', 'os --homedir', 'os --homedir');
  const username = new Commands('os', 'os --username', 'os --username');
  const architecture = new Commands('os', 'os --architecture', 'os --architecture');
  const hash = new Commands('hash', 'hash path_to_file', 'hash file.txt');
  const compress = new Commands('compress', 'compress path_to_file path_to_destination', 'compress file.txt User/Documents');
  const decompress = new Commands('decompress', 'decompress path_to_file path_to_destination', 'decompress file.txt.gz User/Documents');

  console.table([up, cd, ls, cat, add, rn, cp, mv, rm, eol, cpus, homedir, username, architecture, hash, compress, decompress]);
};
