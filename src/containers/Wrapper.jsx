import React from 'react';
import { ThemeProvider } from 'react-jss';

// Styles (hooks)
import themes from 'styles/themes';

// Components
import App from 'containers/App';

const Wrapper = () => (
  <ThemeProvider theme={themes}>
    <App />
  </ThemeProvider>
);

Wrapper.displayName = 'Wrapper';

export default Wrapper;
