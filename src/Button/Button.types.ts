import { ButtonTypes, ButtonColors, ButtonEffects } from '../defaultInterfaces';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
  disabled?: boolean,
  type?: 'button' | 'submit' | 'reset',
  intention?: ButtonTypes,
  color?: ButtonColors,
  feedback?: boolean | Array<number>,
  circle?: boolean,
  roundedCorners?: boolean,
  effect?: ButtonEffects,
  block?: boolean,
}
