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
import {AppRoute} from '../../const';

function App() {
  return (
    <Switch>
      <Route path={AppRoute.ROOT} exact>
        <Main />
      </Route>
      <Route path={AppRoute.LOGIN} exact>
        <SignIn />
      </Route>
      <Route path={AppRoute.FILM} exact>
        <Film />
      </Route>
      <PrivateRoute
        path={AppRoute.REVIEW}
        exact
        render={() => <AddReview />}
      />
      <PrivateRoute
        path={AppRoute.FAVORITES}
        exact
        render={() => <MyList />}
      />
      <Route path={AppRoute.PLAYER} exact>
        <Player />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
