import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';

import MockApiService from './services/mock-api-service';
import {ApiServiceProvider} from './components/api-service-context/api-service-context';

import App from './components/app/app';

import FILMS_DATA from './mocks/films';

const apiService = new MockApiService(FILMS_DATA);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiServiceProvider value={apiService} >
        <Router>
          <App films={FILMS_DATA} />
        </Router>
      </ApiServiceProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
