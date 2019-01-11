import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import Button from '../components/Button/Button';
import noImageFound from '../assets/img/no_image_found.png';
import SingleLineGridList from '../components/Grid/GridList';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { search } from '../actions/searchActions';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end'
  },
  textField: {
    margin: 0,
    width: 200
  }
});

class Search extends Component {
  state = {
    searchQuery: ''
  };

  search = (query, type, limit, offset) => {
    this.props.search(query, type, limit, offset);
  };

  /**
   * size: small, medium, large
   */
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
  filterDataToDisplay = items => {
    if (!items || items.length === 0) return [];
    return items.map(item => {
      const { name: title, images, type, album } = item;
      const imgUrl =
        type !== 'track'
          ? this.getItemImage(images, 250, 400)
          : this.getItemImage(album.images, 250, 400);
      return {
        title,
        imgUrl
      };
    });
  };

  handleChange = event => {
    this.setState({
      searchQuery: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { searchQuery } = this.state;
    if (!searchQuery) return;
    this.search(searchQuery, ['album', 'track', 'artist']);
  };

  areArraysEmpty = arrays => {
    return arrays.every(array => {
      return !array || array.length === 0;
    });
  };

  render() {
    const { classes } = this.props;
    const { albums, artists, tracks } = this.props.results;
    const albumItems = albums && albums.items;
    const artistItems = artists && artists.items;
    const trackItems = tracks && tracks.items;
    return (
      <div>
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={this.onSubmit}
        >
          <TextField
            id="standard-name"
            label="Search"
            className={classes.textField}
            value={this.state.searchQuery}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button type="submit" color="white" aria-label="edit" justIcon round>
            <SearchIcon />
          </Button>
        </form>
        {this.areArraysEmpty([albumItems, artistItems, trackItems]) ? (
          <h3>No Search Results</h3>
        ) : (
          <div>
            <h3>Arists:</h3>
            <SingleLineGridList
              messageWhenEmpty="No search Results"
              data={this.filterDataToDisplay(artistItems)}
            />
            <h3>Tracks:</h3>
            <SingleLineGridList
              messageWhenEmpty="No search Results"
              data={this.filterDataToDisplay(trackItems)}
            />
            <h3>Albums:</h3>
            <SingleLineGridList
              messageWhenEmpty="No search Results"
              data={this.filterDataToDisplay(albumItems)}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    results: state.search.searchResults
  };
};

const mapDispatchToProps = {
  search
};

Search.propTypes = {
  results: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Search));
