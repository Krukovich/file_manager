import fs from 'fs';

export const deleteFile = (options) => {
  const [fileName] = options;
  fs.unlinkSync(fileName)
};
