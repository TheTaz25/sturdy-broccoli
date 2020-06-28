import React from 'react';

import { ParagraphProps } from './Paragraph.types';
import initClassnames from '../utils/classname';

import './Paragraph.scss';

const Paragraph: React.FC<ParagraphProps> = (props: ParagraphProps) => {
  const {
    children, block, align, lineSpacing, className,
  } = props;
  const passProps = { ...props };

  const classes = initClassnames(className, 'b-paragraph');
  if (block) classes.push('b-paragraph-block');
  if (!block && align) classes.push(`b-paragraph-align-${align}`);
  if (lineSpacing === 'large') classes.push('b-paragraph-linespace-large');

  delete passProps.className;
  delete passProps.children;
  delete passProps.block;
  delete passProps.align;
  delete passProps.lineSpacing;

  return (
    <p className={classes.join(' ')} {...passProps}>
      {children}
    </p>
  );
};

export default Paragraph;
