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

export type ThemeTypes = 'default' | 'danger' | 'success' | 'information' | 'warning' | 'primary' | 'ghost';
export type CaseTypes = 'upper' | 'lower' | 'capitalize';
export type AlignTypes = 'left' | 'right' | 'center';
export type TextTypes = 'deleted' | 'added' | 'emphasize' | 'keyboard' | 'mark' | 'result' | 'bold' | 'italic' | 'underline' | 'strikethrough' | 'light';
