import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom'

import {InfoProvider} from './Components/context';

ReactDOM.render(
  
  <InfoProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </InfoProvider>,
  
  document.getElementById('root')
);


