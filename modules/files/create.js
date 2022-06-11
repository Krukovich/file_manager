import fs from 'fs';
import { showOperationError } from '../../helpers.js';

export const createFiles = (options) => {
  const [fileName] = options;
  const path = process.cwd();
  const createStream = fs.createWriteStream(`${path}/${fileName}`)

  createStream.on('error', () => showOperationError());
};
