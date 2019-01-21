import React from 'react';
import GridContainer from './Grid/GridContainer';
import GridItem from './Grid/GridItem';
import PropTypes from 'prop-types';
import AlbumCover from './AlbumCover';

const Cover = props => {
  const { coverImage, title } = props;
  return (
    <GridContainer justify="center" alignItems="center">
      <GridItem
        xs={12}
        sm={6}
        md={3}
        style={{ padding: '0', textAlign: 'center' }}
      >
        <AlbumCover src={coverImage} title={title} width="100%" />
      </GridItem>
      <GridItem xs={12} sm={6} md={9}>
        {props.children}
      </GridItem>
    </GridContainer>
  );
};

Cover.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Cover;
