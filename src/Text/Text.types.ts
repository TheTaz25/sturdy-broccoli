import { ThemeTypes, TextTypes } from '../defaultInterfaces';

export interface TextProps extends React.HTMLAttributes<HTMLAllCollection> {
  type?: TextTypes,
  theme?: ThemeTypes
}
