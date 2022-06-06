import { spawn } from 'child_process';

export const showAll = () => {
  const ls = spawn('ls');

  ls.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
  });

  ls.stderr.on('data', data => {
    console.log(`stderr: ${data}`);
  });
};
