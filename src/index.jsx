import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Store from './scenes/Store/index';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Store />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
