import React from 'react';
import appRoutes from '../routes/appRoutes';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const SideBar = () => {
  return (
    <List>
      {appRoutes.map((prop, key) => {
        if (prop.redirect) return null;
        return (
          <NavLink to={prop.path} activeClassName="active" key={key}>
            <ListItem button>
              <ListItemIcon>
                <prop.icon />
              </ListItemIcon>
              <ListItemText>{prop.navbarName}</ListItemText>
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );
};

export default SideBar;
