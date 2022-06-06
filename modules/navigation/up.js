export const goUpper = () => {
  const path = process.cwd();
  const pathArray = path.split('/');
  pathArray.pop();
  process.chdir(pathArray.join('/'));
};