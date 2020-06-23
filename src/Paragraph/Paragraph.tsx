import React from 'react';

import { ParagraphProps } from './Paragraph.types';

import './Paragraph.scss';

const Paragraph: React.FC<ParagraphProps> = (props: ParagraphProps) => {
  const {
    children, block, align, lineSpacing,
  } = props;

  const classes = ['b-paragraph'];
  if (block) classes.push('b-paragraph-block');
  if (!block && align) classes.push(`b-paragraph-align-${align}`);
  if (lineSpacing === 'large') classes.push('b-paragraph-linespace-large');

  return (
    <p className={classes.join(' ')}>
      {children}
    </p>
  );
};

export default Paragraph;
