import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import { numberWithCommas } from '../services/utils';
import {
  getArtist,
  getArtistsAlbums,
  getArtistsTopTracks,
  getArtistsRelatedArtists
} from '../actions/artistActions';
import SongTable from '../components/SongTable';
import ImageGridList from '../components/Grid/ImageGridList';
import { withStyles } from '@material-ui/core/styles';
import { play } from '../actions/playerActions';
import { filterDataToDisplay, getWiderImage } from '../services/utils';
import uniqBy from 'lodash/uniqBy';

const styles = {
  coverImage: {
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    padding: '15px 0',
    backgroundSize: 'cover',
    margin: '0 auto 1em',
    width: '100%',
    height: '300px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'wrap'
  },
  text: {
    background: 'linear-gradient(60deg, #26c6da, #00acc1)',
    boxShadow:
      '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)',
    borderRadius: '3px',
    color: 'white'
  },
  artistName: {
    padding: '0 10px'
  },
  followers: {
    padding: '1rem'
  }
};

export class Artist extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchArtistData(id);
  }

  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      const id = this.props.match.params.id;
      this.fetchArtistData(id);
    }
  }

  getArtist = id => {
    this.props.getArtist(id);
  };
  getArtistsAlbums = id => {
    this.props.getArtistsAlbums(id);
  };
  getArtistsTopTracks = id => {
    this.props.getArtistsTopTracks(id);
  };
  getArtistsRelatedArtists = id => {
    this.props.getArtistsRelatedArtists(id);
  };

  play = config => {
    this.props.play(config);
  };

  redirectToArtistInfo = id => {
    this.props.history.push(`${id}`);
  };

  fetchArtistData = id => {
    this.getArtist(id);
    this.getArtistsAlbums(id);
    this.getArtistsTopTracks(id);
    this.getArtistsRelatedArtists(id);
  };

  redirectToAlbumInfo = id => {
    this.props.history.push(`/album/${id}`);
  };

  onTileClick = ({ id, uri }) => {
    if (uri.includes('album')) {
      this.redirectToAlbumInfo(id);
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
      artist,
      artistsAlbums,
      artistsTopTracks,
      artistRelatedArtists,
      classes
    } = this.props;
    const artistImages = artist.images || [];
    const albumItems = artistsAlbums && artistsAlbums.items;
    const relatedArtistsItems =
      artistRelatedArtists && artistRelatedArtists.artists;
    const followers = (artist.followers && artist.followers.total) || 0;
    return (
      <div>
        <div
          style={{
            background: `url('${getWiderImage(artistImages)}')`
          }}
          className={classes.coverImage}
          alt={artist.name || ''}
        >
          <h2 className={classes.text + ' ' + classes.artistName}>
            {artist.name || ''}
          </h2>
          <h4 className={classes.text + ' ' + classes.followers}>
            Followers: {numberWithCommas(followers)}
          </h4>
        </div>
        <GridContainer justify="flex-start" alignItems="center">
          <GridItem xs={12} sm={12} md={6}>
            <SongTable
              songs={artistsTopTracks.slice(0, 5)}
              tableTitle="Top Tracks"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h3>Related Artists</h3>
            <ImageGridList
              singleLine
              onTileClick={this.onTileClick}
              lg={3}
              xs={2}
              data={filterDataToDisplay(relatedArtistsItems, 300, 500)}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <h3>Albums</h3>
            <ImageGridList
              onTileClick={this.onTileClick}
              lg={4}
              xs={2}
              data={filterDataToDisplay(uniqBy(albumItems, 'name'))}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Artist.propTypes = {
  artist: PropTypes.object.isRequired,
  artistsAlbums: PropTypes.object.isRequired,
  artistsTopTracks: PropTypes.array.isRequired,
  artistRelatedArtists: PropTypes.object.isRequired,
  getArtist: PropTypes.func.isRequired,
  getArtistsAlbums: PropTypes.func.isRequired,
  getArtistsTopTracks: PropTypes.func.isRequired,
  getArtistsRelatedArtists: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const {
    artist,
    artistsAlbums,
    artistsTopTracks,
    artistRelatedArtists
  } = state.artist;
  return {
    artist,
    artistsAlbums,
    artistsTopTracks,
    artistRelatedArtists
  };
};

const mapDispatchToProps = {
  getArtist,
  getArtistsAlbums,
  getArtistsTopTracks,
  getArtistsRelatedArtists,
  play
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Artist));
