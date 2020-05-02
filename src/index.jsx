import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import { Game } from './components/index.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);