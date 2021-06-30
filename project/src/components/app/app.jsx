import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';

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
      <PrivateRoute
        path="/films/:id/review"
        exact
        render={() => <AddReview />}
      />
      <PrivateRoute
        path="/mylist"
        exact
        render={() => <MyList />}
      />
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
