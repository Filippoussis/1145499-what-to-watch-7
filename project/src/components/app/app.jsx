import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import NotFound from '../not-found/not-found';
import PrivateRouteGeneral from '../private-routes/private-route-general/private-route-general';
import PrivateRouteLogin from '../private-routes/private-route-login/private-route-login';
import {AppRoute} from '../../const';

function App() {
  return (
    <Switch>
      <Route path={AppRoute.ROOT} exact>
        <Main />
      </Route>
      <PrivateRouteLogin
        path={AppRoute.LOGIN}
        exact
        render={() => <SignIn />}
      />
      <Route path={AppRoute.FILM} exact>
        <Film />
      </Route>
      <PrivateRouteGeneral
        path={AppRoute.REVIEW}
        exact
        render={() => <AddReview />}
      />
      <PrivateRouteGeneral
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
