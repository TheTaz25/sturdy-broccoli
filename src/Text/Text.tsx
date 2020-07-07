import React from 'react';

import { TextProps } from './Text.types';
import {
  themeClassGen,
  initClassnames,
} from '../utils/classname';

import './Text.scss';

const typeTagMap = new Map<string, string>();
typeTagMap.set('deleted', 'del');
typeTagMap.set('added', 'ins');
typeTagMap.set('emphasize', 'em');
typeTagMap.set('keyboard', 'kbd');
typeTagMap.set('mark', 'mark');
typeTagMap.set('result', 'span'); // special
typeTagMap.set('bold', 'b');
typeTagMap.set('italic', 'span'); // special
typeTagMap.set('underline', 'span'); // special
typeTagMap.set('strikethrough', 'span'); // special

const COMPONENT_NAME = 'text';

const Text: React.FC<TextProps> = (props: TextProps) => {
  const {
    type, theme, className, children,
  } = props;
  const passProps = { ...props };

  const classes = initClassnames(className, `b-${COMPONENT_NAME}`);

  let textType = 'span';
  if (type) {
    textType = typeTagMap.get(type);
    if (type === 'italic') classes.push(`b-${COMPONENT_NAME}-italic`);
    if (type === 'underline') classes.push(`b-${COMPONENT_NAME}-underline`);
    if (type === 'strikethrough') classes.push(`b-${COMPONENT_NAME}-strikethrough`);
    if (type === 'result') classes.push(`b-${COMPONENT_NAME}-result`);
    if (type === 'mark') classes.push(themeClassGen(COMPONENT_NAME, theme || 'warning'));
    if (type === 'keyboard') classes.push('b-mono');
  } else {
    classes.push(themeClassGen(COMPONENT_NAME, theme || 'default'));
  }

  delete passProps.type;
  delete passProps.theme;
  delete passProps.className;
  delete passProps.children;

  return React.createElement(textType, {
    ...passProps,
    className: classes.join(' '),
  }, children);
};

export default Text;
