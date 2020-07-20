import React from 'react';
import Space from './Space';
import Base from '../Base/Base';
import { withKnobs, number } from '@storybook/addon-knobs';

export default {
  title: 'Space',
  component: Space,
  decorators: [ withKnobs ],
};

export const Basic = () => {
  const options = {
    range: true,
    min: 0,
    max: 6,
    step: 1
  }

  const numberSlider = number('Space', 4, options);

  return (
    <Base>
      <Space space={numberSlider}>
        Components need to be spaced from each other
      </Space>
    </Base>
  );
}
