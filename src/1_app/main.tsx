import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ReduxProvider } from '@app/providers/ReduxProvider.tsx';
import '@app/styles/styles.css';
import { persistStore } from '@app/persistence/persistStore.ts';
import { rehydrateStore } from '@app/persistence/rehydrateStore.ts';

rehydrateStore();
persistStore();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </StrictMode>,
);