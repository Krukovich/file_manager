import fs from 'fs';
import { showOperationError } from '../../helpers.js';

export const renameFiles = (options) => {
  const [inputPath, outputPath] = options;
  const readStream = fs.createReadStream(inputPath);
  const writeStream = fs.createWriteStream(process.cwd() + '/' + outputPath);
  fs.unlinkSync(inputPath);

  readStream.on('error', () => showOperationError());
  writeStream.on('error', () => showOperationError());
};
