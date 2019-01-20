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
import { showNotification } from '../actions/notificationActions';
import { SUCCESS_NOTIFICATION } from '../constants';

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

  showNotification = (status, message, type) => {
    this.props.showNotification(status, message, type);
  };

  onSubmit = event => {
    event.preventDefault();
    const { searchQuery } = this.state;
    if (!searchQuery) return;
    this.search(searchQuery, ['album', 'track', 'artist', 'playlist']);
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
    const { classes } = this.props;
    const { albums, artists, tracks, playlists } = this.props.results;
    const albumItems = albums && albums.items;
    const artistItems = artists && artists.items;
    const trackItems = tracks && tracks.items;
    const playlistItems = playlists && playlists.items;
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
            <h3>Playlists:</h3>
            <ImageGridList
              singleLine
              onTileClick={this.onTileClick}
              messageWhenEmpty="No search Results"
              data={filterDataToDisplay(playlistItems)}
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
  play,
  showNotification
};

Search.propTypes = {
  results: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Search));
