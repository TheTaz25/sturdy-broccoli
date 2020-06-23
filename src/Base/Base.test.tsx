import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Base from './Base';
import { BaseProps } from './Base.types';

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
describe('Base Test', () => {
  let props: BaseProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () => render(<Base {...props} />);

  it('should plainly render', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('broccoli');

    expect(component).toBeInTheDocument();
  });

  it('should render with a theme class', () => {
    props.theme = 'dark';
    props.children = (<div>Test</div>);

    const base = renderer.create(<Base {...props} />).toJSON();
    expect(base).toMatchSnapshot();
  });
});
