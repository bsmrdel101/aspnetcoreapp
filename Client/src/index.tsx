import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './styles/globals.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
