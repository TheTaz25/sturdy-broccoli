import React from 'react';

import { HeadlineProps } from './Headline.types';
import initClassNames from '../utils/classname';

import './Headline.scss';

const Headline: React.FC<HeadlineProps> = (props: HeadlineProps) => {
  const {
    children, underline, className, casing, align,
  } = props;
  const passProps = { ...props };

  const classes = initClassNames(className, 'b-headline');
  let wrapperClass = '';
  if (underline) classes.push('b-headline-underlined');

  switch (casing) {
    case 'capitalize': classes.push('b-headline-capitalize'); break;
    case 'lower': classes.push('b-headline-lower'); break;
    case 'upper': classes.push('b-headline-upper'); break;
    default:
  }

  switch (align) {
    case 'center': wrapperClass = 'b-headline-center'; break;
    case 'left': wrapperClass = 'b-headline-left'; break;
    case 'right': wrapperClass = 'b-headline-right'; break;
    default:
  }

  delete passProps.underline;
  delete passProps.className;
  delete passProps.align;

  return (
    <div className={`b-headline-wrapper ${wrapperClass}`}>
      <h1 {...passProps} className={classes.join(' ')}>
        {children}
      </h1>
    </div>
  );
};

export default Headline;
