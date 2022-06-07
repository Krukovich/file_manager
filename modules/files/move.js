import path from 'path' ;
import fs from 'fs';

export const moveFile = (options) => {
  const [inputPath, outputPath] = options;
  const fileName = path.basename(inputPath);
  const fileReadStream=fs.createReadStream(inputPath);
  const fileWriteStream = fs.createWriteStream(`${outputPath}/${fileName}`);

  fileWriteStream.on('finish', () => {
    fs.unlinkSync(fileName)
  });

  fileReadStream.pipe(fileWriteStream);
};
