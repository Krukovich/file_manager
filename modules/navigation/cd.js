export const changeDirectory = (options) => {
  const [path] = options;
  if (path === '..') {
    process.chdir('../');
    return;
  }

  process.chdir(path);
};
