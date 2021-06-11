import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import NotFound from '../not-found/not-found';

import FILMS_DATA from '../../mocks/films';

const filmPromo = FILMS_DATA[0];

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main films={FILMS_DATA} filmPromo={filmPromo} />
        </Route>
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route
          path="/films/:id"
          exact
          render={({match}) => {
            const {id} = match.params;
            const selectedFilm = FILMS_DATA.find((film) => film.id === Number(id));
            return <Film selectedFilm={selectedFilm} />;
          }}
        />
        <Route
          path="/films/:id/review"
          exact
          render={({match}) => {
            const {id} = match.params;
            const selectedFilm = FILMS_DATA.find((film) => film.id === Number(id));
            return <AddReview selectedFilm={selectedFilm} />;
          }}
        />
        <Route path="/mylist" exact>
          <MyList films={FILMS_DATA} />
        </Route>
        <Route
          path="/player/:id"
          exact
          render={({match}) => {
            const {id} = match.params;
            const selectedFilm = FILMS_DATA.find((film) => film.id === Number(id));
            return <Player selectedFilm={selectedFilm} />;
          }}
        />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
