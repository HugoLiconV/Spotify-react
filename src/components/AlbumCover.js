import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const style = {
  width: '100%',
  backgroundColor: 'rgb(255, 255, 255)',
  boxShadow: 'rgba(118, 143, 255, 0.1) 0px 16px 24px 0px',
  borderRadius: '4.5px'
};

class AlbumCover extends PureComponent {
  render() {
    const { src, title, width } = this.props;
    const overrideWidth = width ? width : style.width;
    return (
      <img src={src} alt={title} style={{ ...style, width: overrideWidth }} />
    );
  }
}

AlbumCover.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string
};

export default AlbumCover;
