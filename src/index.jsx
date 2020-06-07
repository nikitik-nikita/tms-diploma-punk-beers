import React from 'react';
import ReactDOM from 'react-dom';

// HOCs
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store';

// Components
import { Provider } from 'react-redux';
import Wrapper from './containers/Wrapper';


ReactDOM.render((
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Wrapper />
      </BrowserRouter>
    </PersistGate>
  </Provider>),
document.getElementById('root'));
