import React from 'react';

import { QuoteProps } from './Quote.types';
import { initClassnames, themeClassGen } from '../utils/classname';

import './Quote.scss';

const COMPONENT_NAME = 'quote';

const Quote: React.FC<QuoteProps> = (props: QuoteProps) => {
  const {
    children, by, className, source, withBar, withQuotes, barTheme,
  } = props;
  const passProps = { ...props };

  const classes = initClassnames(className, `b-${COMPONENT_NAME}`);
  const pClass = [];
  pClass.push(themeClassGen(barTheme));
  if (withBar) pClass.push(`b-${COMPONENT_NAME}-border`);
  if (withQuotes) pClass.push(`b-${COMPONENT_NAME}-quotes`);

  delete passProps.className;
  delete passProps.children;
  delete passProps.by;
  delete passProps.source;
  delete passProps.withBar;
  delete passProps.withQuotes;
  delete passProps.barTheme;

  return (
    <blockquote className={classes.join(' ')} {...passProps}>
      <p className={pClass.join(' ')}>
        {children}
      </p>
      <footer>
        {by || ''}
        {by && source && ','}
        <cite>{source || ''}</cite>
      </footer>
    </blockquote>
  );
};

export default Quote;
