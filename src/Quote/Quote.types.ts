import React from 'react';
import { ThemeTypes } from '../defaultInterfaces';

export interface QuoteProps extends React.HTMLAttributes<HTMLQuoteElement>{
  by?: string,
  source?: string,
  withQuotes?: Boolean,
  withBar?: Boolean,
  barTheme?: ThemeTypes
}
