import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import FILMS_DATA from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App films={FILMS_DATA} />
  </React.StrictMode>,
  document.getElementById('root'));
