export interface BasicTextProps {
  italic?: Boolean,
  bold?: Boolean,
  underline?: Boolean,
}

export interface ThemeProp {
  theme?: ThemeTypes
}

export interface CasingProp {
  casing?: CaseTypes
}

export interface AlignProp {
  align?: AlignTypes
}

export type ThemeTypes = 'error' | 'success' | 'info' | 'warning' | 'primary' | 'secondary';
export type CaseTypes = 'upper' | 'lower' | 'capitalize';
export type AlignTypes = 'left' | 'right' | 'center';
export type TextTypes = 'deleted' | 'added' | 'emphasize' | 'keyboard' | 'mark' | 'result' | 'bold' | 'italic' | 'underline' | 'strikethrough' | 'light';

export type ButtonTypes = 'cta' | 'outlined' | 'primary';
export type ButtonColors = 'primary' | 'secondary' | 'success' | 'warn' | 'error' | 'info';
export type ButtonEffects = 'elevated' | 'clicky';
