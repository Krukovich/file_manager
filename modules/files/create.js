import fs from 'fs';

export const createFiles = (options) => {
  const [fileName] = options;
  const path = process.cwd();
  fs.createWriteStream(`${path}/${fileName}`)
};
