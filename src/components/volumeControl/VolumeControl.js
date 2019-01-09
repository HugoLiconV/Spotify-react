import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
// It doesn't uss Css in JS because we needed to use a pseudo selector
import './VolumeControl.css';

class VolumeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.volume };
  }

  onChange = event => {
    const value = event.target.value;
    this.setState({ value: value });
  };

  onDragEnd = () => {
    this.props.onVolumeChange(this.state.value);
  };

  render() {
    return (
      <div className="root">
        <IconButton aria-label="Volume Down">
          <VolumeMuteIcon />
        </IconButton>
        <div className="container">
          <input
            className="slider"
            type="range"
            min="0"
            max="100"
            step="10"
            onMouseUp={this.onDragEnd}
            onChange={this.onChange}
            value={this.state.value}
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
  onVolumeChange: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired
};

export default VolumeControl;
