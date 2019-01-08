import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = theme => ({
  root: {
    width: '100%'
    // maxWidth: 360
  }
});
class DeviceSelector extends React.Component {
  state = {
    anchorEl: null
  };

  getActiveDevice = devices => {
    if (devices.length < 0) return [];
    return devices.filter(device => device.is_active)[0];
  };

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const devices = this.props.devices;
    const activeDevice = this.getActiveDevice(devices);
    const deviceName = activeDevice ? activeDevice.name : 'No device selected';
    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="Device"
            onClick={this.handleClickListItem}
          >
            <ListItemText primary="Device" secondary={deviceName} />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {devices.map((device, index) => (
            <MenuItem
              key={device.id}
              selected={activeDevice.id === device.id}
              onClick={() => {
                const selectedId = devices[index].id;
                this.props.onDeviceSelected(selectedId);
                this.setState({ anchorEl: null });
              }}
            >
              {device.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

DeviceSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  devices: PropTypes.array.isRequired
};

export default withStyles(styles)(DeviceSelector);
