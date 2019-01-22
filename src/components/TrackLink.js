import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { play } from '../actions/playerActions';
import { showNotification } from '../actions/notificationActions';
import { SUCCESS_NOTIFICATION } from '../constants';

export const TrackLink = props => {
  function showNotification(status, message, type) {
    props.showNotification(status, message, type);
  }

  function playSong(uri, title) {
    play({ uris: [uri] });
    showNotification(null, `${title} started playing.`, SUCCESS_NOTIFICATION);
  }

  function play(config) {
    props.play(config);
  }

  return (
    <span
      onClick={() => {
        playSong(props.uri, props.title);
      }}
      style={{ cursor: 'pointer' }}
    >
      {props.title}
    </span>
  );
};

TrackLink.propTypes = {
  title: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  play: PropTypes.func.isRequired,
  showNotification: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  play,
  showNotification
};

export default connect(
  null,
  mapDispatchToProps
)(TrackLink);
