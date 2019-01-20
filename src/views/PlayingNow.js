import React, { Component } from 'react';
import { connect } from 'react-redux';
import AlbumCover from '../components/AlbumCover';
import MediaControls from '../components/MediaControls';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import DeviceSelector from '../components/DeviceSelector';
import VolumeControl from '../components/volumeControl/VolumeControl';
import PropTypes from 'prop-types';
import {
  pollingPlayerState,
  nextSong,
  previousSong,
  setVolume,
  pause,
  play,
  setRepeat,
  toggleShuffle,
  transferPlayback
} from '../actions/playerActions';
import ImageGridList from '../components/Grid/ImageGridList';
import { repeatStates } from '../constants';
import { filterDataToDisplay, isObjectEmpty } from '../services/utils';

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
export class PlayingNow extends Component {
  componentDidMount() {
    this.pollingPlayerState(true);
  }

  componentWillUnmount() {
    this.pollingPlayerState(false);
  }

  pollingPlayerState = isPolling => {
    this.props.pollingPlayerState(isPolling);
  };

  onDeviceSelected = id => {
    this.transferPlayback([id]);
  };

  transferPlayback = ids => {
    this.props.transferPlayback(ids);
  };

  nextSong = () => {
    this.props.nextSong();
  };

  previousSong = () => {
    this.props.previousSong();
  };

  onVolumeChange = value => {
    this.props.setVolume(value);
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

  play = config => {
    this.props.play(config);
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

  onPauseClick = () => {
    const {
      is_playing: isPlaying,
      progress_ms: progress,
      item
    } = this.props.currentlyPlaying;
    if (isPlaying) {
      this.pause();
    } else {
      this.play({ uris: [item.uri], position_ms: progress });
    }
  };

  onTileClick = item => {
    this.play({ uris: [item.uri] });
  };

  render() {
    const currentlyPlaying = this.props.currentlyPlaying;
    const player = this.props.player;
    const devices = this.props.devices;
    const { items } = this.props.recentlyPlayed;
    const tracks = items && items.map(item => item.track);

    if (isObjectEmpty(currentlyPlaying) || isObjectEmpty(player))
      return 'Nothing is playing';
    const { device } = player;
    const { artists, album, name } = currentlyPlaying.item;
    return (
      <GridContainer justify="center" style={center} alignItems="center">
        <GridItem xs={12} sm={6} md={6}>
          <AlbumCover src={album.images[0].url} title={album.name} />
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
        <GridItem xs={12} sm={6} md={6}>
          <div className="song-info">
            <h3 className="song-title">{name}</h3>
            <h4 className="song-artist">{artists.map(this.renderNames)}</h4>
          </div>
          <DeviceSelector
            devices={devices}
            onDeviceSelected={this.onDeviceSelected}
          />
          <VolumeControl
            onVolumeChange={this.onVolumeChange}
            volume={device.volume_percent}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} style={left}>
          <h2>Recently Played</h2>
          <ImageGridList
            id="recently-played"
            singleLine
            data={filterDataToDisplay(tracks)}
            onTileClick={this.onTileClick}
          />
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
  player: PropTypes.object.isRequired,
  devices: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  const { currentlyPlaying, player, devices, recentlyPlayed } = state.player;
  return {
    currentlyPlaying,
    player,
    devices,
    recentlyPlayed
  };
};

const mapDispatchToProps = {
  nextSong,
  previousSong,
  setVolume,
  pause,
  play,
  setRepeat,
  toggleShuffle,
  transferPlayback,
  pollingPlayerState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayingNow);
