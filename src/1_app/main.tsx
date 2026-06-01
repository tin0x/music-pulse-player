import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { withRedux } from '@app/providers/withRedux.tsx';
import '@app/styles/styles.css';
import { persistStore } from '@app/persistence/persistStore.ts';
import { rehydrateStore } from '@app/persistence/rehydrateStore.ts';

const ReduxProvider = withRedux(App);
rehydrateStore();
persistStore();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider />
  </StrictMode>,
);
