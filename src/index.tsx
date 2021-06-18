import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ColorModeScript } from '@chakra-ui/react';

import 'normalize.css';
import './index.css';

import App from './App';
import AppTheme from './theme';

ReactDOM.render(
  <StrictMode>
    <ColorModeScript initialColorMode={AppTheme.config.initialColorMode} />
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
