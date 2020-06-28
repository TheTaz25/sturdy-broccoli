export interface HeadlineProps extends React.HTMLAttributes<HTMLHeadingElement>{
  underline? : Boolean,
  casing?: 'upper' | 'lower' | 'capitalize';
  align?: 'left' | 'right' | 'center';
}
