import zlib from 'zlib';
import fs from 'fs';
import path from 'path';

export const decompressFile = async (options) => {
  const [inputPath, outputPath] = options;
  const filename = path.basename(inputPath);
  const decompressFileName = filename.substr(0, filename.lastIndexOf('.'));
  const readStream = fs.createReadStream(filename);
  const writeStream = fs.createWriteStream(`${outputPath}/${decompressFileName}`);
  const brotli = zlib.createBrotliDecompress();
  readStream.pipe(brotli).pipe(writeStream);
};
