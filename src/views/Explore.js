import React, { Component } from 'react';
import ImageGridList from '../components/Grid/ImageGridList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFeaturedPlaylists, getNewReleases } from '../actions/browseActions';
import noImageFound from '../assets/img/no_image_found.png';
import {
  getUsersTopTracks,
  getUsersTopArtists
} from '../actions/personalizationActions';
import { play } from '../actions/playerActions';
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

  getItemImage = (images, minSize, maxSize) => {
    if (!images || images.length === 0) return noImageFound;
    const filteredImages = images.filter(
      ({ width }) => width > minSize && width < maxSize
    );
    return filteredImages.length === 0 ? images[0].url : images[0].url;
  };

  /**
   * it returns the format required to display data on
   * ImageGridList Component
   */
  filterDataToDisplay = items => {
    if (!items || items.length === 0) return [];
    return items.map(item => {
      const { name: title, images, type, album, uri, id } = item;
      const imgUrl =
        type !== 'track'
          ? this.getItemImage(images, 250, 400)
          : this.getItemImage(album.images, 250, 400);
      return {
        title,
        imgUrl,
        uri,
        id
      };
    });
  };

  play = config => {
    this.props.play(config);
  };

  redirectToArtistInfo = id => {
    this.props.history.push(`artist/${id}`);
  };

  onTileClick = ({ id, uri }) => {
    if (uri.includes('album')) {
      alert('Not implemented yet 😢');
    } else if (uri.includes('artist')) {
      this.redirectToArtistInfo(id);
    } else if (uri.includes('track')) {
      this.play({ uris: [uri] });
    } else if (uri.includes('playlist')) {
      alert('Not implemented yet 😢');
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
          data={this.filterDataToDisplay(featuredPlaylistsItems)}
        />

        <h2>New Releases</h2>
        <ImageGridList
          singleLine
          onTileClick={this.onTileClick}
          data={this.filterDataToDisplay(newReleasesItems)}
        />

        <h2>Your top tracks</h2>
        <ImageGridList
          singleLine
          onTileClick={this.onTileClick}
          data={this.filterDataToDisplay(topTracksItems)}
        />

        <h2>Your top artists:</h2>
        <ImageGridList
          singleLine
          onTileClick={this.onTileClick}
          data={this.filterDataToDisplay(topArtistsItems)}
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
  play
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);
