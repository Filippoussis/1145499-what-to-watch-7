import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MainPage from '../main-page/main-page';
import UserPage from '../user-page/user-page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/mylist">
          <UserPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
