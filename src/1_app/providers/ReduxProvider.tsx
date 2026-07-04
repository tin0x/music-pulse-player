import { Provider } from 'react-redux';
import * as React from 'react';
import { store } from '@app/store/store.ts';

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);
