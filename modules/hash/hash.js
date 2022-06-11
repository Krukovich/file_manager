import fs from 'fs';
import crypto from 'crypto';
import { showOperationError } from '../../helpers.js';

export const getHashFromFile = (options) => {
  try {
    const [path] = options;
    const receiveData = fs.readFileSync(path);
    const hash = crypto.createHash('sha256');
    let hexCode;

    hash.on('readable', () => {
      const data = hash.read();
      if (data) {
        hexCode = data.toString('hex');
      }
    });

    hash.write(receiveData);
    hash.end();
    console.log(hexCode);
  } catch (e) {
    showOperationError();
  }
};
