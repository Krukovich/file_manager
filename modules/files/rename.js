import fs from 'fs';

export const renameFiles = (options) => {
  const [inputPath, outputPath] = options;
  fs.createReadStream(inputPath);
  fs.createWriteStream(process.cwd() + '/' + outputPath);
  fs.unlinkSync(inputPath);
};
