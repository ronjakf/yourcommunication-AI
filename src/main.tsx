import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Automatischer Reload, falls nach einem Deployment alte (nicht mehr existierende) Module geladen werden
window.addEventListener('vite:preloadError' as any, () => {
  window.location.reload();
});

window.addEventListener('error', (e) => {
  if (
    e.message &&
    (e.message.includes('Failed to fetch dynamically imported module') ||
      e.message.includes('Importing a module script failed'))
  ) {
    window.location.reload();
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
