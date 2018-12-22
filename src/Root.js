import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import indexRoutes from './routes/index';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            );
          })}
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;
