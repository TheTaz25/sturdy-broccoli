import {
  BasicTextProps, ThemeProp, CasingProp, AlignProp,
} from '../defaultInterfaces';

export interface SubtitleProps extends
  React.HTMLAttributes<HTMLHeadingElement>,
  BasicTextProps,
  ThemeProp,
  CasingProp,
  AlignProp{}
