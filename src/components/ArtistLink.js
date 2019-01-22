import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

export const ArtistLink = props => {
  function redirectToArtistInfo(id) {
    props.history.push(`/artist/${id}`);
  }

  return (
    <span
      onClick={() => {
        redirectToArtistInfo(props.artistId);
      }}
      style={{ cursor: 'pointer', color: '#00acc1' }}
    >
      {props.title}
    </span>
  );
};

ArtistLink.propTypes = {
  title: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired
};

export default withRouter(ArtistLink);
