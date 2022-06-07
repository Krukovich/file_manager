import fs from 'fs';

export const copyFiles = (options) => {
  const [inputPath, outputPath] = options;
  const readable = fs.createReadStream(inputPath);
  readable.on('data', (chunk) => {
    console.log(chunk);
    // const writable = fs.createWriteStream(`${path}/${outputPath}`);
    // readable.pipe(writable);
  });
};
