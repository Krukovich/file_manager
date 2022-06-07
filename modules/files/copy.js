import fs from 'fs';
import path from "path";

export const copyFiles = (options) => {
  const [inputPath, outputPath] = options;
  const filename = path.basename(inputPath);
  const fileReadStream=fs.createReadStream(inputPath);
  const fileWriteStream = fs.createWriteStream(`${outputPath}/${filename}`);
  fileReadStream.pipe(fileWriteStream);
};
