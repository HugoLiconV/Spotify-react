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
  }
});
class DeviceSelector extends React.Component {
  state = {
    anchorEl: null
  };

  /**
   * This functions works to know if the array of devices received from the
   * new props is equals to the current one. If that's the case, it should
   * not update the component */
  areDevicesEqual(current, updated) {
    if (current.length !== updated.length) return false;
    return current.every(
      ({ id, is_active }, i) =>
        id === updated[i].id && is_active === updated[i].is_active
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(
      nextState === this.state &&
      this.areDevicesEqual(nextProps.devices, this.props.devices)
    );
  }

  getActiveDevice = devices => {
    const activeDevice = devices.filter(device => device.is_active);
    if (activeDevice.length > 0) {
      return activeDevice[0];
    }
    return {};
  };

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  isObjectEmpty = obj => {
    return Object.keys(obj).length === 0;
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const devices = this.props.devices;
    const activeDevice = this.getActiveDevice(devices);
    const deviceName = this.isObjectEmpty(activeDevice)
      ? 'No device selected'
      : activeDevice.name;
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
