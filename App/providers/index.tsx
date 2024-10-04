import React, {ReactNode} from 'react';
import {MaterialProvider} from './material';

interface GlobalProviderProps {
  children: ReactNode;
  theme?: any;
}
export const GlobalProvider = ({children}: GlobalProviderProps) => {
  return <MaterialProvider>{children}</MaterialProvider>;
};
