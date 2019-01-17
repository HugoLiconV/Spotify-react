import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import Button from '../components/Button/Button';
import ImageGridList from '../components/Grid/ImageGridList';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { search } from '../actions/searchActions';
import { withStyles } from '@material-ui/core/styles';
import { areArraysEmpty } from '../services/utils';
import { play } from '../actions/playerActions';
import { filterDataToDisplay } from '../services/utils';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
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
        {areArraysEmpty([albumItems, artistItems, trackItems]) ? (
          <h3>No Search Results</h3>
        ) : (
          <div>
            <h3>Arists:</h3>
            <ImageGridList
              singleLine
              onTileClick={this.onTileClick}
              messageWhenEmpty="No search Results"
              data={filterDataToDisplay(artistItems)}
            />
            <h3>Tracks:</h3>
            <ImageGridList
              singleLine
              onTileClick={this.onTileClick}
              messageWhenEmpty="No search Results"
              data={filterDataToDisplay(trackItems)}
            />
            <h3>Albums:</h3>
            <ImageGridList
              singleLine
              onTileClick={this.onTileClick}
              messageWhenEmpty="No search Results"
              data={filterDataToDisplay(albumItems)}
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
  search,
  play
};

Search.propTypes = {
  results: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Search));
