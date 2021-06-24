import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';

import filmProp from '../../props/film';

function App({films}) {
  return (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/login" exact>
        <SignIn />
      </Route>
      <Route
        path="/films/:id"
        exact
        render={({match}) => {
          const {id} = match.params;
          const selectedFilm = films.find((film) => film.id === Number(id));
          return <Film selectedFilm={selectedFilm} />;
        }}
      />
      <Route
        path="/films/:id/review"
        exact
        render={({match}) => {
          const {id} = match.params;
          const selectedFilm = films.find((film) => film.id === Number(id));
          return <AddReview selectedFilm={selectedFilm} />;
        }}
      />
      <Route
        path="/player/:id"
        exact
        render={({match}) => {
          const {id} = match.params;
          const selectedFilm = films.find((film) => film.id === Number(id));
          return <Player selectedFilm={selectedFilm} />;
        }}
      />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

App.propTypes = {
  films: PropTypes.arrayOf(filmProp),
};

export default App;
