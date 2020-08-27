import React from 'react';
import Button from './Button';
import Base from '../Base/Base';

export default {
  title: 'Button',
  component: Button,
};

export const Basic = () => (
  <Base>
    <Button color="primary">My Button</Button>
  </Base>
);
