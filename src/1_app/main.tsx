import { persistStore } from '@app/persistence/persistStore.ts';
import { rehydrateStore } from '@app/persistence/rehydrateStore.ts';
import AuthProvider from '@app/providers/auth/AuthProvider.tsx';
import LanguageProvider from '@app/providers/language/LanguageProvider.tsx';
import { ReduxProvider } from '@app/providers/ReduxProvider.tsx';
import '@app/styles/styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

rehydrateStore();
persistStore();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <AuthProvider>
        <ReduxProvider>
          <App />
        </ReduxProvider>
      </AuthProvider>
    </LanguageProvider>
  </StrictMode>,
);
