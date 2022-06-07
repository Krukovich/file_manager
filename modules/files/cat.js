import fs from 'fs';

export const cat = (options) => {
  const [path] = options;
  const readStream = fs.createReadStream(path);

  readStream.on('data', (chunk) => {
    console.log(chunk.toString());
  });
};
