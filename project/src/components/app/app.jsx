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

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main films={FILMS_DATA} />
        </Route>
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path="/films/:id" exact>
          <Film />
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReview />
        </Route>
        <Route path="/mylist" exact>
          <MyList />
        </Route>
        <Route path="/player" exact>
          <Player />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
