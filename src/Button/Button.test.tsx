import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';
import { ButtonProps } from './Button.types';

/*
  TODO: Replace the following content with more meaningful tests
  What you can test:
  1. Just the plain component
  2. Test various props
  3. If your component supports multiple data types as props, test those
  4. Check if events are called and how many are called (best case: 1)
  5. Test all possible conditions if your component is complex
  6. Check the component's state before and after an event
  7. Add tests for each component related issue!
*/
describe('Button Test', () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = null;
  });

  const renderComponent = () => render(<Button {...props} />);

  it('should plainly render', () => {
    const { getByText } = renderComponent();

    const component = getByText('Button');

    expect(component).toBeInTheDocument();
  });
});
