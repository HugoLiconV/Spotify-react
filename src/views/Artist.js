import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import noImageFound from '../assets/img/no_image_found.png';
import { numberWithCommas } from '../services/utils';
import {
  getArtist,
  getArtistsAlbums,
  getArtistsTopTracks,
  getArtistsRelatedArtists
} from '../actions/artistActions';
import SongTable from '../components/SongTable';
import SingleLineGridList from '../components/Grid/GridList';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  coverImage: {
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    margin: '0 auto 1em',
    width: '100%',
    height: '300px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
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

class Artist extends Component {
  constructor(props) {
    super(props);
    this.artistId = this.props.match.params.id;
  }

  componentDidMount() {
    this.getArtist(this.artistId);
    this.getArtistsAlbums(this.artistId);
    this.getArtistsTopTracks(this.artistId);
    this.getArtistsRelatedArtists(this.artistId);
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

  getWiderImage(images) {
    if (images.length === 0) return noImageFound;
    let widerImage = images[0];
    images.forEach(image => {
      image = Math.max(widerImage.width, image.width);
    });
    return widerImage.url;
  }

  getItemImage = (images, minSize, maxSize) => {
    if (!images || images.length === 0) return noImageFound;
    const filteredImages = images.filter(
      ({ width }) => width > minSize && width < maxSize
    );
    return filteredImages.length === 0 ? images[0].url : images[0].url;
  };

  /**
   * it returns the format required to display data on
   * SingleLineGridList Component
   */
  filterDataToDisplay = (items, minSize = 250, maxSize = 400) => {
    if (!items || items.length === 0) return [];
    return items.map(item => {
      const { name: title, images } = item;

      const imgUrl = this.getItemImage(images, minSize, maxSize);
      return {
        title,
        imgUrl
      };
    });
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
            background: `url('${this.getWiderImage(artistImages)}')`
          }}
          className={classes.coverImage}
          alt={artist.name || ''}
        >
          <h1 className={classes.text + ' ' + classes.artistName}>
            {artist.name || ''}
          </h1>
          <h4 className={classes.text + ' ' + classes.followers}>
            followers: {numberWithCommas(followers)}
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
            <SingleLineGridList
              lg={3}
              data={this.filterDataToDisplay(relatedArtistsItems, 50, 200)}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <h3>Albums</h3>
            <SingleLineGridList
              grid
              lg={4}
              data={this.filterDataToDisplay(albumItems)}
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
  artistRelatedArtists: PropTypes.object.isRequired
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
  getArtistsRelatedArtists
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Artist));
