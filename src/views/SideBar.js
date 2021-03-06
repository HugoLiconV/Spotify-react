import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Drawer
} from '@material-ui/core';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import SideBarStyle from '../assets/styles/components/sidebarStyle';

const SideBar = props => {
  const { classes, routes } = props;
  const activeRoute = routeName =>
    props.location.pathname.indexOf(routeName) > -1;

  const links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        if (!prop.showInSidebar) return null;
        const listItemClasses = classNames({
          [' ' + classes.blue]: activeRoute(prop.path)
        });
        return (
          <NavLink
            to={prop.path}
            activeClassName="active"
            key={key}
            className={classes.item}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              <ListItemIcon className={classes.itemIcon}>
                <prop.icon />
              </ListItemIcon>
              <ListItemText
                primary={prop.sidebarName}
                className={classes.itemText}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );

  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          open={props.open}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <div className={classes.sidebarWrapper}>{links}</div>
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.SideBarWrapper}>{links}</div>
        </Drawer>
      </Hidden>
    </div>
  );
};

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
};

export default withStyles(SideBarStyle)(SideBar);
