import fs from 'fs';

export const createFiles = (fileName) => {
  const path = process.cwd();
  fs.createWriteStream(`${path}/${fileName}`)
};