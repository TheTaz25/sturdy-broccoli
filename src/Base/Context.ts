import React, { SetStateAction } from 'react';

interface ContextProps {
    theme: string,
    setTheme: React.Dispatch<SetStateAction<string>>
}

export default React.createContext<ContextProps>({
  theme: 'default',
  setTheme: () => {},
});
