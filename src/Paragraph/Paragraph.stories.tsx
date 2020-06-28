import React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import Paragraph from './Paragraph';
import Base from '../Base/Base';
import generateText from '../../.storybook/storobookUtils/textGenerator';
import generateTextFiveTimes from '../../.storybook/storobookUtils/textGenerator';

export default {
    component: Paragraph,
    title: 'Paragraph',
    decorators: [ withKnobs ],
};

const alignOptions = {
  Left: 'left',
  Center: 'center',
  Right: 'right'
};

const spacingOptions = {
  Default: 'default',
  Large: 'large'
};

export const Basic = () => (
    <Base>
        <Paragraph>
            {generateText()}
        </Paragraph>
    </Base>
);

export const AllOptions = () => {
  const block = boolean('Block', true);
  const alignSelect = select('Text Alignment', alignOptions, 'left');
  const spaceSelect = select('Line Spacing', spacingOptions, 'default');

  return (
    <Base>
      <Paragraph
        block={block}
        align={alignSelect as any}
        lineSpacing={spaceSelect as any}
      >
        {generateTextFiveTimes()}
      </Paragraph>
    </Base>
  )
}

export const AsBlock = () => {
  const block = boolean('Block', true);

  return (
    <Base>
      <Paragraph block={block}>
        {generateText()}
      </Paragraph>
    </Base>
  );
};

export const Alignment = () => {
    const value = select('Text Alignment', alignOptions, 'left');

    return (
        <Base>
            <Paragraph align={value as any}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sapiente ut consequatur. Aliquam nisi quibusdam perspiciatis fuga hic, temporibus architecto molestiae doloribus non soluta dicta aperiam id eum optio eligendi.
            </Paragraph>
        </Base>
    );
};

export const Spacing = () => {
    const value = select('Line Spacing', spacingOptions, 'default');

    return (
        <Base>
            <Paragraph lineSpacing={value as any}>
                {generateText()}
            </Paragraph>
        </Base>
    )
};
