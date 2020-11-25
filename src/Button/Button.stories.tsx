import React from 'react';
import Button from './Button';
import Base from '../Base/Base';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { ButtonTypes, ButtonColors, ButtonEffects } from '../defaultInterfaces';

export default {
  title: 'Button',
  component: Button,
  decorators: [ withKnobs ],
};

const colorOptions = {
  Primary: 'primary',
  Secondary: 'secondary',
  Success: 'success',
  Warn: 'warn',
  Error: 'error',
  Info: 'info'
};

const effectOptions = {
  Elevated: 'elevated',
  Clicky: 'clicky',
  None: undefined,
};

const intentionOptions = {
  CTA: 'cta',
  Primary: 'primary',
  Outlined: 'outlined'
};

export const AllSettings = () => {
  const disabled = boolean('Disabled', false);
  const intention = select('Intention (Variation)', intentionOptions, intentionOptions.Outlined);
  const color = select('Colors', colorOptions, colorOptions.Primary);
  const circle = boolean('Style as circle', false);
  const roundedCorners = boolean('Rounded Corners', false);
  const effect = select('Effect', effectOptions, effectOptions.None);

  return (
    <Base>
      <Button
        disabled={disabled}
        circle={circle}
        roundedCorners={roundedCorners}
        color={color as ButtonColors}
        intention={intention as ButtonTypes}
        effect={effect as ButtonEffects}
      >
        My Button
      </Button>
    </Base>
  );
};
