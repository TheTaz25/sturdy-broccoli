import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Text from './Text';
import Base from '../Base/Base';

export default {
  title: 'Text',
  component: Text,
  decorators: [ withKnobs ],
};

const ThemeOptions = {
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
    <Text>This is some Text</Text>
  </Base>
);

export const Bold = () => (
  <Base>
    <Text type="bold">This is some bold Text</Text>
  </Base>
)

export const Italic = () => (
  <Base>
    <Text type="italic">This text is written in Italic</Text>
  </Base>
)

export const Underlined = () => (
  <Base>
    <Text type="underline">This text is underlined</Text>
  </Base>
)

export const StrikeThrough = () => (
  <Base>
    <Text type="strikethrough">This text is stroken through</Text>
  </Base>
)

export const Result = () => (
  <Base>
    The answer to 5+5 equals to <Text type="result">10</Text>
  </Base>
)

export const Mark = () => {
  const themeSelection = select('Theme', ThemeOptions, ThemeOptions.None);

  // No theme defaults to warning!
  return (
    <Base>
      <Text type="mark" theme={themeSelection}>This text is highlighted!</Text>
    </Base>
  )
}

export const Keyboard = () => (
  <Base>
    <Text type="keyboard">CTRL+A</Text> to select all
  </Base>
)

export const Emphasize = () => (
  <Base>
    <Text type="emphasize">This</Text> should stand out
  </Base>
)

export const Inserted = () => (
  <Base>
    Sometimes, we have to <Text type="added">add</Text> something!
  </Base>
)

export const Deleted = () => (
  <Base>
    And sometimes, we need to <Text type="deleted">delete</Text> something...
  </Base>
)

export const Light = () => (
  <Base>
    <Text type="light">Use this type for secondary content.</Text>
  </Base>
)