import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const AlbumLink = props => {
  function redirectToAlbumInfo(id) {
    props.history.push(`/album/${id}`);
  }

  return (
    <span
      onClick={() => {
        redirectToAlbumInfo(props.albumId);
      }}
      style={{ cursor: 'pointer' }}
    >
      {props.title}
    </span>
  );
};

AlbumLink.propTypes = {
  title: PropTypes.string.isRequired,
  albumId: PropTypes.string.isRequired
};

export default withRouter(AlbumLink);
