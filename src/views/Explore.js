import React, { Component } from 'react';
import ImageGridList from '../components/Grid/ImageGridList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFeaturedPlaylists, getNewReleases } from '../actions/browseActions';
import {
  getUsersTopTracks,
  getUsersTopArtists
} from '../actions/personalizationActions';
import { play } from '../actions/playerActions';
import { filterDataToDisplay } from '../services/utils';
import { showNotification } from '../actions/notificationActions';
import { SUCCESS_NOTIFICATION } from '../constants';
class Explore extends Component {
  componentDidMount() {
    this.getFeaturedPlaylists();
    this.getNewReleases();
    this.getUsersTopArtists('long_term');
    this.getUsersTopTracks('long_term');
  }

  getUsersTopTracks = (timeRange = 'medium_term', limit = 20, offset = 0) => {
    this.props.getUsersTopTracks(timeRange, limit, offset);
  };

  getUsersTopArtists = (timeRange = 'medium_term', limit = 20, offset = 0) => {
    this.props.getUsersTopArtists(timeRange, limit, offset);
  };

  getFeaturedPlaylists = (limit = 20, offset = 0) => {
    this.props.getFeaturedPlaylists(limit, offset);
  };

  getNewReleases = (limit = 20, offset = 0) => {
    this.props.getNewReleases(limit, offset);
  };

  play = config => {
    this.props.play(config);
  };

  redirectToArtistInfo = id => {
    this.props.history.push(`artist/${id}`);
  };

  redirectToPlaylistInfo = id => {
    this.props.history.push(`playlist/${id}`);
  };

  redirectToAlbumInfo = id => {
    this.props.history.push(`album/${id}`);
  };

  showNotification = (status, message, type) => {
    this.props.showNotification(status, message, type);
  };

  onTileClick = ({ id, uri, title }) => {
    if (uri.includes('album')) {
      this.redirectToAlbumInfo(id);
    } else if (uri.includes('artist')) {
      this.redirectToArtistInfo(id);
    } else if (uri.includes('track')) {
      this.play({ uris: [uri] });
      this.showNotification(
        null,
        `${title} started playing.`,
        SUCCESS_NOTIFICATION
      );
    } else if (uri.includes('playlist')) {
      this.redirectToPlaylistInfo(id);
    }
  };

  render() {
    const {
      featuredPlaylists,
      newReleases,
      topTracks,
      topArtists
    } = this.props;
    const featuredPlaylistsItems =
      featuredPlaylists.playlists && featuredPlaylists.playlists.items;
    const newReleasesItems = newReleases.albums && newReleases.albums.items;
    const topTracksItems = topTracks.items || [];
    const topArtistsItems = topArtists.items || [];
    return (
      <div>
        <h2>{featuredPlaylists.message || ''}</h2>
        <ImageGridList
          singleLine
          onTileClick={this.onTileClick}
          data={filterDataToDisplay(featuredPlaylistsItems)}
        />

        <h2>New Releases</h2>
        <ImageGridList
          singleLine
          onTileClick={this.onTileClick}
          data={filterDataToDisplay(newReleasesItems)}
        />

        <h2>Your top tracks</h2>
        <ImageGridList
          singleLine
          onTileClick={this.onTileClick}
          data={filterDataToDisplay(topTracksItems)}
        />

        <h2>Your top artists:</h2>
        <ImageGridList
          singleLine
          onTileClick={this.onTileClick}
          data={filterDataToDisplay(topArtistsItems)}
        />
      </div>
    );
  }
}

Explore.propTypes = {
  featuredPlaylists: PropTypes.object.isRequired,
  newReleases: PropTypes.object.isRequired,
  topTracks: PropTypes.object.isRequired,
  topArtists: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    featuredPlaylists: state.browse.featuredPlaylists,
    newReleases: state.browse.newReleases,
    topTracks: state.personalization.topTracks,
    topArtists: state.personalization.topArtists
  };
};

const mapDispatchToProps = {
  getFeaturedPlaylists,
  getNewReleases,
  getUsersTopTracks,
  getUsersTopArtists,
  play,
  showNotification
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);
