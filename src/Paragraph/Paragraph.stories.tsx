import React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import Paragraph from './Paragraph';
import Base from '../Base/Base';
import generateText from '../storobookUtils/textGenerator';

export default {
    component: Paragraph,
    title: 'Paragraph',
    decorators: [ withKnobs ],
};

export const Basic = () => (
    <Base>
        <Paragraph>
            {generateText()}
        </Paragraph>
    </Base>
);

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
    const options = {
        Left: 'left',
        Center: 'center',
        Right: 'right'
    };

    const value = select('Text Alignment', options, 'left');

    return (
        <Base>
            <Paragraph align={value as any}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sapiente ut consequatur. Aliquam nisi quibusdam perspiciatis fuga hic, temporibus architecto molestiae doloribus non soluta dicta aperiam id eum optio eligendi.
            </Paragraph>
        </Base>
    );
};

export const Spacing = () => {
    const options = {
        Default: 'default',
        Large: 'large'
    };

    const value = select('Line Spacing', options, 'default');

    return (
        <Base>
            <Paragraph lineSpacing={value as any}>
                {generateText()}
            </Paragraph>
        </Base>
    )
};
