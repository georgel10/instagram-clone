import React from 'react';
import Routes from './src/routes';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';

import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
