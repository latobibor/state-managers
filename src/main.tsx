import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import '@lowlighter/matcha/dist/matcha.lite.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Provider as OvermindProvider } from 'overmind-react';
import { overmind } from './overmind/overmind-config.ts';
import { store as reduxStore } from './redux/redux-store';
import { Provider as ReduxProvider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OvermindProvider value={overmind}>
      <ReduxProvider store={reduxStore}>
        <App/>
      </ReduxProvider>
    </OvermindProvider>
  </React.StrictMode>,
);
