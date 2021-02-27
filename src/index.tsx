import './index.css';

import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AppTheme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={AppTheme.config.initialColorMode} />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
