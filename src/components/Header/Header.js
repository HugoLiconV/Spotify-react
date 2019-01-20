import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/icons/Menu';
import Button from '../Button/Button';
import headerStyle from '../../assets/styles/components/headerStyle';
import GoBackButton from '../Button/GoBackButton';

const Header = ({ ...props }) => {
  const findCurrentRoute = () => {
    return props.routes.find(route => {
      const path = route.path.split('/')[1] || route.path;
      return props.location.pathname.includes(path);
    });
  };
  const makeBrand = () => {
    const currentRoute = findCurrentRoute();
    return currentRoute.sidebarName || '';
  };
  const { classes } = props;
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {findCurrentRoute().showInSidebar ? null : <GoBackButton />}
          <Button color="transparent" href="#" className={classes.title}>
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css" />
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(headerStyle)(Header);
