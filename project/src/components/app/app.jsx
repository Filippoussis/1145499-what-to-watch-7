import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Main />
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
      <Route path="/player/:id" exact>
        <Player />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
