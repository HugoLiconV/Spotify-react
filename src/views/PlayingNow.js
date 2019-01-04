import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cover from '../components/Cover';
import MediaControls from '../components/MediaControls';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import AlbumsList from '../components/AlbumsList';
import DeviceSelector from '../components/DeviceSelector';
import VolumeControl from '../components/VolumeControl';
import PropTypes from 'prop-types';
import {
  getCurrentlyPlaying,
  nextSong,
  previousSong,
  getPlayer,
  setVolume,
  getDevices,
  pause,
  play,
  setRepeat,
  toggleShuffle
} from '../actions/playerActions';

const currentPlayback = {
  item: {
    shuffle_state: true,
    repeat_state: 'context',
    is_playing: true,
    album: {
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/4ZKIf1mbtchoPebHfyt3Wf'
          },
          href: 'https://api.spotify.com/v1/artists/4ZKIf1mbtchoPebHfyt3Wf',
          id: '4ZKIf1mbtchoPebHfyt3Wf',
          name: 'Trailer Trash Tracys',
          type: 'artist',
          uri: 'spotify:artist:4ZKIf1mbtchoPebHfyt3Wf'
        }
      ],
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/63851d447107aa0eb8b5b5e28d2bb3f9ba23f12b',
          width: 640
        },
        {
          height: 300,
          url:
            'https://i.scdn.co/image/f01e6d66349f2c6bbbb211580400c3773100bdc4',
          width: 300
        },
        {
          height: 64,
          url:
            'https://i.scdn.co/image/af9cf8fdc6ed04b0041fb5e55469acfb165815df',
          width: 64
        }
      ],
      name: 'Coup De Grace'
    },
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/4ZKIf1mbtchoPebHfyt3Wf'
        },
        href: 'https://api.spotify.com/v1/artists/4ZKIf1mbtchoPebHfyt3Wf',
        id: '4ZKIf1mbtchoPebHfyt3Wf',
        name: 'Trailer Trash Tracys',
        type: 'artist',
        uri: 'spotify:artist:4ZKIf1mbtchoPebHfyt3Wf'
      }
    ],
    name: 'You Wish You Were Red'
  }
};

const center = {
  textAlign: 'center'
};

const left = {
  textAlign: 'left'
};

const repeatStates = ['off', 'context', 'track'];
export class PlayingNow extends Component {
  componentDidMount() {
    this.getPlayer();
    this.currentlyPlaying();
  }

  getPlayer = () => {
    this.props.getPlayer();
  };
  currentlyPlaying = () => {
    this.props.getCurrentlyPlaying();
  };

  nextSong = () => {
    this.props.nextSong();
  };

  previousSong = () => {
    this.props.previousSong();
  };

  onVolumeChange = event => {
    this.props.setVolume(event.target.value);
  };

  onShuffleClick = () => {
    this.toggleShuffle(!this.props.player.shuffle_state);
  };

  toggleShuffle = shuffle => {
    this.props.toggleShuffle(shuffle);
  };

  setRepeat = state => {
    this.props.setRepeat(state);
  };

  pause = () => {
    this.props.pause();
  };

  resume = (contextUri, offset, position) => {
    this.props.play(contextUri, offset, position);
  };
  onRepeatClick = (states, currentState) => {
    const index = states.indexOf(currentState);
    const nextStateIndex = (index + 1) % states.length;
    const newState = states[nextStateIndex];
    this.setRepeat(newState);
  };

  renderNames = (artist, key, arr) => {
    return (
      <span key={key}>
        {artist.name}
        {key < arr.length - 1 ? ', ' : ''}
      </span>
    );
  };

  isObjectEmpty = obj => {
    return obj && Object.keys(obj).length === 0;
  };

  onPauseClick = () => {
    const {
      is_playing: isPlaying,
      progress_ms: progress,
      context,
      item
    } = this.props.currentlyPlaying;
    //context.uri item.uri item.album.uri
    if (isPlaying) {
      this.pause();
    } else {
      // debugger;
      const contextUri = context ? context.uri : item.album.uri;
      const offset = { uri: item.uri };
      this.resume(contextUri, offset, progress);
    }
  };

  render() {
    const currentlyPlaying = this.props.currentlyPlaying;
    const player = this.props.player;

    if (this.isObjectEmpty(currentlyPlaying) || this.isObjectEmpty(player))
      return 'Nothing is plying';
    const { device } = player;
    const { artists, album, name } = currentlyPlaying.item;
    return (
      <GridContainer justify="center" style={center}>
        <GridItem xs={12} sm={12} md={6}>
          <Cover src={album.images[0].url} title={album.name} />
          <MediaControls
            id="media-controls"
            shuffle={player.shuffle_state}
            repeatState={player.repeat_state}
            onRepeatClick={() => {
              this.onRepeatClick(repeatStates, player.repeat_state);
            }}
            onShuffleClick={this.onShuffleClick}
            isPlaying={currentlyPlaying.is_playing}
            onPauseClick={this.onPauseClick}
            nextSong={this.nextSong}
            previousSong={this.previousSong}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <div className="song-info">
            <h3 className="song-title">{name}</h3>
            <h4 className="song-artist">{artists.map(this.renderNames)}</h4>
          </div>
          <DeviceSelector />
          <VolumeControl
            onVolumeChange={this.onVolumeChange}
            volume={device.volume_percent}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} style={left}>
          <h2>Recently Played</h2>
          <AlbumsList />
        </GridItem>
      </GridContainer>
    );
  }
}

PlayingNow.defaultProps = {
  currentPlayback
};

PlayingNow.propTypes = {
  currentlyPlaying: PropTypes.object.isRequired,
  player: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    currentlyPlaying: state.player.currentlyPlaying,
    player: state.player.player
  };
};

const mapDispatchToProps = {
  getCurrentlyPlaying,
  nextSong,
  getPlayer,
  previousSong,
  setVolume,
  getDevices,
  pause,
  play,
  setRepeat,
  toggleShuffle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayingNow);
