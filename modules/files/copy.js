import fs from 'fs';
import path from 'path';
import { showOperationError } from '../../helpers.js';

export const copyFiles = (options) => {
  const [inputPath, outputPath] = options;
  const fileName = path.basename(inputPath);
  const fileReadStream=fs.createReadStream(inputPath);
  const fileWriteStream = fs.createWriteStream(`${outputPath}/${fileName}`);

  fileReadStream.on('error', () => showOperationError());
  fileWriteStream.on('error', () => showOperationError());

  fileReadStream.pipe(fileWriteStream);
};
