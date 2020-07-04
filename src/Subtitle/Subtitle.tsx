import React from 'react';

import { SubtitleProps } from './Subtitle.types';

import './Subtitle.scss';
import {
  themeClassGen,
  initClassnames,
  caseClassGen,
  textClassGen,
  alignClassGen,
} from '../utils/classname';

const COMPONENT_NAME = 'subtitle';

const Subtitle: React.FC<SubtitleProps> = (props: SubtitleProps) => {
  const {
    bold,
    italic,
    underline,
    theme,
    casing,
    align,
    children,
    className,
  } = props;
  const passProps = { ...props };

  const classes = initClassnames(className, `b-${COMPONENT_NAME}`);

  classes.push(...textClassGen(COMPONENT_NAME, { bold, italic, underline }));
  if (casing) classes.push(caseClassGen(COMPONENT_NAME, casing));
  if (align) classes.push(alignClassGen(COMPONENT_NAME, align));

  classes.push(themeClassGen(COMPONENT_NAME, theme));

  delete passProps.bold;
  delete passProps.italic;
  delete passProps.underline;
  delete passProps.theme;
  delete passProps.casing;
  delete passProps.align;
  delete passProps.children;

  return (
    <h2 {...passProps} className={classes.join(' ')}>
      {children}
    </h2>
  );
};

export default Subtitle;
