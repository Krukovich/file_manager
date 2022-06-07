import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

export const compressFile = async (options) => {
  const [inputPath, outputPath] = options;
  const filename = path.basename(inputPath);
  const readStream = fs.createReadStream(filename);
  const writeStream = fs.createWriteStream(`${outputPath}/${filename}.gz`);
  const brotli = zlib.createBrotliCompress();
  readStream.pipe(brotli).pipe(writeStream);
};
