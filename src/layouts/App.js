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
import Header from '../components/Header/Header';

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
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
  }

  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  noMargin() {
    return this.props.location.pathname.match(`/artist/.?`) !== null;
  }

  render() {
    const token = loadItem('TOKEN');
    const { classes, ...rest } = this.props;
    if (token !== undefined) {
      return (
        <div className={classes.wrapper}>
          <SideBar
            routes={appRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            open={this.state.mobileOpen}
            {...rest}
          />
          <div className={classes.mainPanel} ref="mainPanel">
            {this.noMargin() ? (
              <div>{switchRoutes}</div>
            ) : (
              <div>
                <Header
                  routes={appRoutes}
                  handleDrawerToggle={this.handleDrawerToggle}
                  {...rest}
                />
                <div className={classes.content}>
                  <div className={classes.container}>{switchRoutes}</div>
                </div>
              </div>
            )}
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
