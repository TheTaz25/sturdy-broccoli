import React from 'react';

import { HeadlineProps } from './Headline.types';
import { initClassnames, caseClassGen, alignClassGen } from '../utils/classname';

import './Headline.scss';

const COMPONENT_NAME = 'headline';

const Headline: React.FC<HeadlineProps> = (props: HeadlineProps) => {
  const {
    children, underline, className, casing, align,
  } = props;
  const passProps = { ...props };

  const classes = initClassnames(className, `b-${COMPONENT_NAME}`);
  let wrapperClass = '';
  if (underline) classes.push(`b-${COMPONENT_NAME}-underlined`);

  if (casing) classes.push(caseClassGen(COMPONENT_NAME, casing));

  if (align) wrapperClass = alignClassGen(COMPONENT_NAME, align);

  delete passProps.underline;
  delete passProps.className;
  delete passProps.align;
  delete passProps.children;

  return (
    <div className={`b-${COMPONENT_NAME}-wrapper ${wrapperClass}`}>
      <h1 {...passProps} className={classes.join(' ')}>
        {children}
      </h1>
    </div>
  );
};

export default Headline;
