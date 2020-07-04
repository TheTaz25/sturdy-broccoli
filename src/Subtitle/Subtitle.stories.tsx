import React from 'react';
import Subtitle from './Subtitle';
import Base from '../Base/Base';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Subtitle',
  component: Subtitle,
  decorators: [ withKnobs ],
};

const headline = 'Welcome to Broccoli';

const capitalizationOptions = {
  None: undefined,
  Capitalize: 'capitalize',
  'All Uppercase': 'upper',
  'All Lowercase': 'lower',
};

const alignmentOptions = {
  None: undefined,
  Left: 'left',
  Center: 'center',
  Right: 'right', 
};

const themeOptions = {
  None: undefined,
  Default: 'default',
  Danger: 'danger',
  Success: 'success',
  Information: 'information',
  Warning: 'warning',
  Primary: 'primary',
  Ghost: 'ghost',
};

export const Basic = () => (
  <Base>
    <Subtitle>{headline}</Subtitle>
  </Base>
);

export const AllConfigurationOptions = () => {
  const bold = boolean('Bold', false);
  const italic = boolean('Italic', false);
  const underline = boolean('Underline', false);
  const themeSelection = select('Theme', themeOptions, themeOptions.None);
  const alignmentSelection = select('Alignment', alignmentOptions, alignmentOptions.None);
  const capitalizationSelection = select('Capitalization', capitalizationOptions, capitalizationOptions.None);
  const headlineText = text('Text', headline);

  return (
    <Base>
      <Subtitle 
        bold={bold}
        italic={italic}
        underline={underline}
        theme={themeSelection}
        align={alignmentSelection}
        casing={capitalizationSelection}
      >
        {headlineText}
      </Subtitle>
    </Base>
  )
}
