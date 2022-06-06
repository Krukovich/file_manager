export const changeDirectory = (path) => {
  if (path === '..') {
    process.chdir('../');
  }
  process.chdir(path);
};
