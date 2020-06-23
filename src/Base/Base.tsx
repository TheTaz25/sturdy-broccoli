import React from 'react';

import { BaseProps } from './Base.types';
import BroccoliContext from './Context';

import './Base.scss';

const Base: React.FC<BaseProps> = (props: BaseProps) => {
  const { children, theme } = props;
  const [_theme, setTheme] = React.useState(theme);
  const [classes, setClasses] = React.useState(['broccoli']);

  React.useEffect(() => {
    if (_theme) setClasses(['broccoli', `theme-${_theme}`]);
  }, [_theme]);

  return (
    <BroccoliContext.Provider value={{
      theme: _theme,
      setTheme,
    }}
    >
      <div className={classes.join(' ')} data-testid="broccoli">
        {children}
      </div>
    </BroccoliContext.Provider>
  );
};

export default Base;
