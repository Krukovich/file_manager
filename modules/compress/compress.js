import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { showOperationError } from '../../helpers.js';

export const compressFile = async (options) => {
  const [inputPath, outputPath] = options;
  const fileName = path.basename(inputPath);
  const readStream = fs.createReadStream(fileName);
  const writeStream = fs.createWriteStream(`${outputPath}/${fileName}.gz`);
  const brotli = zlib.createBrotliCompress();


  readStream.on('error', () => showOperationError());
  writeStream.on('error', () => showOperationError());
  brotli.on('error', () => showOperationError());

  readStream.pipe(brotli).pipe(writeStream);
};
