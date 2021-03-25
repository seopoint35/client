import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WebStore from './Store/index';
import {Provider} from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={WebStore}> 
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

