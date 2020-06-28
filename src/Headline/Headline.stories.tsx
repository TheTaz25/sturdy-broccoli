import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import Headline from './Headline';
import Base from '../Base/Base';

export default {
  title: 'Headline',
  component: Headline,
  decorators: [ withKnobs ],
};

const headline = 'Welcome to Broccoli!';

const capitalizationOptions = {
  Capitalize: 'capitalize',
  'All Uppercase': 'upper',
  'All lowercase': 'lower',
};

const alignmentOptions = {
  Left: 'left',
  Center: 'center',
  Right: 'right', 
};

export const Basic = () => (
  <Base>
    <Headline>{headline}</Headline>
  </Base>
);

export const AllOptions = () => {
  const headerText = text('Headline Text', headline);
  const underline = boolean('Underline', true);
  const alignSelection = select('Alignment', alignmentOptions, 'left');
  const capitalizationSelection = select('Capitalization', capitalizationOptions, 'capitalize');

  return (
    <Base>
      <Headline
        underline={underline}
        align={alignSelection as any}
        casing={capitalizationSelection as any}
      >
        {headerText}
      </Headline>
    </Base>
  )
}

export const Underlined = () => {
  const underline = boolean('Underline', true);
  
  return (
    <Base>
      <Headline underline={underline}>{headline}</Headline>
    </Base>
  );
};

export const ModifyCapitalization = () => {
  const headerText = text('Headline Text', headline);
  const capitalization = select('Capitalization', capitalizationOptions, 'capitalize');

  return (
    <Base>
      <Headline casing={capitalization as any}>
        {headerText}
      </Headline>
    </Base>
  )
}

export const Alignment = () => {
  const alignment = select('Alignment', alignmentOptions, 'left');

  return (
    <Base>
      <Headline align={alignment as any}>
        {headline}
      </Headline>
    </Base>
  )
}