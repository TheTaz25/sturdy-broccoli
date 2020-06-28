const initClassnames = (classname: string, defaults?: string): string[] => {
  const classNames = classname || '';
  const classes = [...defaults.split(' '), ...classNames.split(' ')];
  return classes;
};

export default initClassnames;
