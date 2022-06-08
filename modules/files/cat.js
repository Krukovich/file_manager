import fs from 'fs';
import { showOperationError } from '../../helpers.js';

export const cat = (options) => {
  const [path] = options;
  const readStream = fs.createReadStream(path);

  readStream.on('data', (chunk) => {
    console.log(chunk.toString());
  });

  readStream.on('error', () => showOperationError());
};
