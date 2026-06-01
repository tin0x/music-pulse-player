import { Provider } from 'react-redux';
import * as React from 'react';
import { store } from '@app/store/store.ts';

export const withRedux = (Component: React.ComponentType) => () => (
  <Provider store={store}>
    <Component />
  </Provider>
);
