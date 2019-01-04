import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

const styles = {
  root: {
    width: 300,
    display: 'flex'
  },
  slider: {
    padding: '22px 0px'
  },
  blue: {
    backgroundColor: '#00acc1',
    margin: 0
  },
  track: {
    margin: 0
  }
};

class VolumeControl extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <IconButton aria-label="Volume Down">
          <VolumeMuteIcon />
        </IconButton>
        <div className="slidecontainer">
          {this.props.volume}
          <input
            type="range"
            min="0"
            max="100"
            step="10"
            onChange={this.props.onVolumeChange}
            value={this.props.volume}
            id="myRange"
          />
        </div>
        <IconButton aria-label="Volume Up">
          <VolumeUpIcon />
        </IconButton>
      </div>
    );
  }
}

VolumeControl.propTypes = {
  classes: PropTypes.object.isRequired,
  onVolumeChange: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired
};

export default withStyles(styles)(VolumeControl);
