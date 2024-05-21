import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { Provider as OvermindProvider } from 'overmind-react';
import { overmind } from './overmind/overmind-config.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OvermindProvider value={overmind}>
      <App/>
    </OvermindProvider>
  </React.StrictMode>,
);
