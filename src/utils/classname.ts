import {
  ThemeTypes,
  CaseTypes,
  BasicTextProps,
  AlignTypes,
} from '../defaultInterfaces';

const initClassnames = (classname: string, defaults?: string): string[] => {
  const classNames = classname || '';
  const classes = [...defaults.split(' '), ...classNames.split(' ')];
  return classes;
};

const themeClassGen = (
  theme?: ThemeTypes,
): string => `b-theme-${theme || 'default'}`;

const caseClassGen = (
  componentName: string,
  casing: CaseTypes,
): string => `b-${componentName}-case-${casing}`;

const textClassGen = (
  componentName: string,
  properties: BasicTextProps,
): string[] => {
  const ret = [];
  const str = `b-${componentName}-`;
  if (properties.bold) ret.push(`${str}bold`);
  if (properties.italic) ret.push(`${str}italic`);
  if (properties.underline) ret.push(`${str}underline`);
  return ret;
};

const alignClassGen = (
  componentName: string,
  align: AlignTypes,
): string => `b-${componentName}-align-${align}`;

export {
  initClassnames,
  themeClassGen,
  caseClassGen,
  textClassGen,
  alignClassGen,
};
