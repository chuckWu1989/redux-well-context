import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';
import UserPage from './UserPage';
import app from '../routers/appRouter';
import { APP } from '../constants/Config';

const Root = props => (
  <Router>
    <div>
      <Route path="/" render={() => <HomePage appName={props.name} />} />
      <Route path="/:login" render={() => <UserPage appName={props.name} />} />
      {/* <Route path="/:login/:name" component={RepoPage} />
      <Route path="/:login" component={UserPage} /> */}
    </div>
  </Router>
);

export default app(APP, Root);
