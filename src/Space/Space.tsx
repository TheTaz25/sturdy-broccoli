import React from 'react';

import { SpaceProps } from './Space.types';

import { initClassnames } from '../utils/classname';
import './Space.scss';

const COMPONENT_NAME = 'space';

const Space: React.FC<SpaceProps> = (props: SpaceProps) => {
  const { children, space, className } = props;
  const passProps = { ...props };

  const classes = initClassnames(`b-${COMPONENT_NAME}-level${space}`, className);

  delete passProps.children;
  delete passProps.space;
  delete passProps.className;

  return (<div {...passProps} className={classes.join(' ')}>{children}</div>);
};

export default Space;
