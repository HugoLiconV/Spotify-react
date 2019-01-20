import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAlbum, getAlbumsTracks } from '../actions/albumActions';
import PropTypes from 'prop-types';
import Cover from '../components/Cover';
import { getItemImage } from '../services/utils';
import SongTable from '../components/SongTable';

export class Album extends Component {
  constructor(props) {
    super(props);
    this.albumId = this.props.match.params.id;
    this.fetchAlbumInfo(this.albumId);
  }

  fetchAlbumInfo = id => {
    this.getAlbum(id);
    this.getAlbumsTracks(id);
  };

  getAlbum = id => {
    this.props.getAlbum(id);
  };

  getAlbumsTracks = id => {
    this.props.getAlbumsTracks(id);
  };

  getArtistsNames(artist, key, arr) {
    return (
      <span key={key}>
        {artist.name}
        {key < arr.length - 1 ? ', ' : ''}
      </span>
    );
  }

  getYearFromReleaseDate(releaseDate, precision) {
    if (precision === 'year') return releaseDate;
    return new Date(releaseDate).getFullYear();
  }

  render() {
    const {
      name,
      release_date,
      release_date_precision: precision
    } = this.props.album;
    const artists = this.props.album.artists || [];
    const images = this.props.album.images || [];
    const coverImage = getItemImage(images, 250, 350);
    const albumsTracks = this.props.albumsTracks.items || [];

    return (
      <React.Fragment>
        <Cover coverImage={coverImage} title={name || ''}>
          <h2>{name}</h2>
          <h3>{artists.map(this.getArtistsNames)}</h3>
          <p>Release: {this.getYearFromReleaseDate(release_date, precision)}</p>
        </Cover>
        <SongTable
          songs={albumsTracks}
          tableTitle={`Album's Tracks`}
          duration
        />
      </React.Fragment>
    );
  }
}

Album.propTypes = {
  album: PropTypes.object.isRequired,
  albumsTracks: PropTypes.object.isRequired,
  getAlbum: PropTypes.func.isRequired,
  getAlbumsTracks: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    album: state.album.album,
    albumsTracks: state.album.albumsTracks
  };
};

const mapDispatchToProps = {
  getAlbum,
  getAlbumsTracks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
