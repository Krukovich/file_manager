import fs from 'fs';
import path from 'path';

export const copyFiles = (options) => {
  const [inputPath, outputPath] = options;
  const fileName = path.basename(inputPath);
  const fileReadStream=fs.createReadStream(inputPath);
  const fileWriteStream = fs.createWriteStream(`${outputPath}/${fileName}`);
  fileReadStream.pipe(fileWriteStream);
};
