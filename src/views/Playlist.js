import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlaylist, getPlaylistsTracks } from '../actions/playlistActions';
import PropTypes from 'prop-types';
import Cover from '../components/Cover';
import { getItemImage } from '../services/utils';
import SongTable from '../components/SongTable';
import { numberWithCommas } from '../services/utils';

export class Playlist extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchPlaylistInfo(id);
  }

  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      const id = this.props.match.params.id;
      this.fetchPlaylistInfo(id);
    }
  }

  fetchPlaylistInfo = id => {
    this.getPlaylist(id);
    this.getPlaylistsTracks(id);
  };

  getPlaylist = id => {
    this.props.getPlaylist(id);
  };

  getPlaylistsTracks = id => {
    this.props.getPlaylistsTracks(id);
  };

  getTracks(tracks) {
    if (!tracks || tracks.length === 0) return [];
    return tracks.map(track => {
      return track.track;
    });
  }

  render() {
    const playlist = this.props.playlist;
    const { name, description } = playlist;

    const followers = (playlist.followers && playlist.followers.total) || 0;
    const owner = (playlist.owner && playlist.owner.display_name) || '';
    const images = playlist.images || [];
    const coverImage = getItemImage(images, 250, 350);
    const playlistTracks = this.props.playlistsTracks.items || [];
    return (
      <React.Fragment>
        <Cover coverImage={coverImage} title={name || ''}>
          <h2>{name}</h2>
          <h5>
            Author: {owner}
            <br />
            Followers: {numberWithCommas(followers)}
          </h5>
          <p>{description}</p>
        </Cover>
        <SongTable
          songs={this.getTracks(playlistTracks)}
          tableTitle={`Playlist's Tracks`}
          cover
          album
          duration
        />
      </React.Fragment>
    );
  }
}

Playlist.propTypes = {
  playlist: PropTypes.object.isRequired,
  playlistsTracks: PropTypes.object.isRequired,
  getPlaylist: PropTypes.func.isRequired,
  getPlaylistsTracks: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    playlist: state.playlist.playlist,
    playlistsTracks: state.playlist.playlistsTracks
  };
};

const mapDispatchToProps = {
  getPlaylist,
  getPlaylistsTracks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
