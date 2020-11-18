import React from 'react';
import { CasingProp, AlignProp } from '../defaultInterfaces';

export interface HeadlineProps extends
  React.HTMLAttributes<HTMLHeadingElement>,
  CasingProp,
  AlignProp {
  underline? : Boolean
}
