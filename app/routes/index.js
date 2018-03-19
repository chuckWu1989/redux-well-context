import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import lazyLoading from '../hocs/lazyLoading';
import './style.less';

const AppRouter = () => (
  <Router>
    <div className="router-style">
      <div className="header">
        <div>Demo Page</div>
      </div>
      <div className="container">
        <div className="navigator">
          <div className="item"><Link to="/">Simple Example</Link></div>
        </div>
        <div className="content-body">
          <Switch>
            <Route exact path="/" component={lazyLoading(() => import('./HomePage'))} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

export default AppRouter;
