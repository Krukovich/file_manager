import path from 'path' ;
import fs from 'fs';
import { showOperationError } from '../../helpers.js';

export const moveFile = (options) => {
  const [inputPath, outputPath] = options;
  const fileName = path.basename(inputPath);
  const fileReadStream=fs.createReadStream(inputPath);
  const fileWriteStream = fs.createWriteStream(`${outputPath}/${fileName}`);

  fileWriteStream.on('finish', () => {
    fs.unlinkSync(fileName)
  });

  fileReadStream.on('error', () => showOperationError());
  fileWriteStream.on('error', () => showOperationError());

  fileReadStream.pipe(fileWriteStream);
};
