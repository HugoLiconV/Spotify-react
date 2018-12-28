import React, { Component } from 'react';
import './App.css';
import SideBar from '../views/SideBar';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import appRoutes from '../routes/appRoutes';
import withStyles from '@material-ui/core/styles/withStyles';
import dashboardStyle from '../assets/styles/layouts/dashboardStyle';
import { loadItem } from '../services/localStorage';
import LoginSpotify from '../views/LoginSpotify';

const switchRoutes = (
  <Switch>
    {appRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends Component {
  render() {
    const token = loadItem('TOKEN');
    const { classes, ...rest } = this.props;
    if (token !== undefined) {
      return (
        <div className={classes.wrapper}>
          <SideBar routes={appRoutes} {...rest} />
          <div className={classes.mainPanel}>
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return <LoginSpotify />;
    }
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(App);
