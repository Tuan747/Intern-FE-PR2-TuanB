import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyles from './styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
