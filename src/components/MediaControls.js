import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PauseIcon from '@material-ui/icons/Pause';
import PlayIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import withStyles from '@material-ui/core/styles/withStyles';

const style = {
  blue: {
    color: '#00acc1'
  }
};

export class MediaControls extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const {
      shuffle: shuffleUpdated,
      isPlaying: isPlayingUpdated,
      repeatState: repeatStateUpdated
    } = nextProps;

    const { shuffle, isPlaying, repeatState } = this.props;
    return (
      shuffleUpdated !== shuffle ||
      isPlayingUpdated !== isPlaying ||
      repeatStateUpdated !== repeatState
    );
  }

  render() {
    const {
      classes,
      shuffle,
      isPlaying,
      repeatState,
      nextSong,
      previousSong,
      onShuffleClick,
      onPauseClick,
      onRepeatClick
    } = this.props;
    return (
      <div>
        <IconButton
          aria-label="Shuffle"
          className={shuffle ? classes.blue : ''}
          onClick={onShuffleClick}
        >
          <ShuffleIcon id="shuffle" />
        </IconButton>
        <IconButton aria-label="Previous" onClick={previousSong}>
          <SkipPreviousIcon id="previous" />
        </IconButton>
        <IconButton
          aria-label={isPlaying ? 'Pause' : 'Play'}
          onClick={onPauseClick}
        >
          {isPlaying ? <PauseIcon id="pause" /> : <PlayIcon id="play" />}
        </IconButton>
        <IconButton aria-label="Next" onClick={nextSong}>
          <SkipNextIcon id="next" />
        </IconButton>
        {/*Repeat: context, track, off*/}
        <IconButton
          onClick={onRepeatClick}
          aria-label="Repeat"
          className={repeatState !== 'off' ? classes.blue : ''}
        >
          {repeatState === 'context' ? (
            <RepeatIcon id="repeat" />
          ) : repeatState === 'track' ? (
            <RepeatOneIcon id="repeat" />
          ) : (
            <RepeatIcon id="repeat" />
          )}
        </IconButton>
      </div>
    );
  }
}

MediaControls.propTypes = {
  nextSong: PropTypes.func.isRequired,
  previousSong: PropTypes.func.isRequired,
  onShuffleClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onRepeatClick: PropTypes.func.isRequired,
  onPauseClick: PropTypes.func.isRequired,
  shuffle: PropTypes.bool.isRequired,
  repeatState: PropTypes.string.isRequired
};

export default withStyles(style)(MediaControls);
