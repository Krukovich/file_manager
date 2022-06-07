import fs from 'fs';

export const showAll = () => {
  const path = process.cwd();
  const files = fs.readdirSync(path);
  console.log(files);
};
