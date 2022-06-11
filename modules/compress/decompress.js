import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { showOperationError } from '../../helpers.js';

export const decompressFile = async (options) => {
  const [inputPath, outputPath] = options;
  const fileName = path.basename(inputPath);
  const decompressFileName = fileName.substr(0, fileName.lastIndexOf('.'));
  const readStream = fs.createReadStream(fileName);
  const writeStream = fs.createWriteStream(`${outputPath}/${decompressFileName}`);
  const brotli = zlib.createBrotliDecompress();

  readStream.on('error', () => showOperationError());
  writeStream.on('error', () => showOperationError());
  brotli.on('error', () => showOperationError());

  readStream.pipe(brotli).pipe(writeStream);
};
