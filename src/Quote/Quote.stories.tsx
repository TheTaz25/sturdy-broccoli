import React from 'react';
import Quote from './Quote';
import Base from '../Base/Base';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Quote',
  component: Quote,
  decorators: [ withKnobs ],
};

const themeOptions = {
  None: undefined,
  Error: 'error',
  Success: 'success',
  Information: 'info',
  Warning: 'warning',
  Primary: 'primary',
  Secondary: 'secondary',
};

const quote = 'It\'s really hard to design products by focus groups. A lot of times, people don\'t know what they want until you show it to them.';
const quoted = 'Steve Jobs';

export const Basic = () => (
  <Base>
    <Quote by={quoted}>
      {quote}
    </Quote>
  </Base>
);

export const AllOptions = () => {
  const showBar = boolean('Show Bar', false);
  const barTheme = select('Bar Theme Color', themeOptions, themeOptions.None);
  const showQuotes = boolean('Show Quote Characters', false);

  return (
    <Base>
      <Quote
        by={quoted}
        withBar={showBar}
        barTheme={barTheme}
        withQuotes={showQuotes}
      >
        {quote}
      </Quote>
    </Base>
  )
}