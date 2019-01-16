import React from 'react';
import Table from './Table';
import Card from './Card/Card';
import CardHeader from './Card/CardHeader';
import CardBody from './Card/CardBody';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import noImageFound from '../assets/img/no_image_found.png';
import Cover from './Cover';

const styles = {
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0'
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF'
    }
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1'
    }
  }
};

function getSmallerImage(images) {
  if (images.length === 0) return noImageFound;
  let widerImage = images[0];
  images.forEach(image => {
    image = Math.min(widerImage.width, image.width);
  });
  return widerImage.url;
}

function createData(songs) {
  if (songs.length === 0) return [];
  return songs.map((song, i) => {
    const num = (i + 1).toString();
    const albumImage = getSmallerImage(song.album.images);
    const cover = <Cover src={albumImage} width="32px" />;
    const songName = song.name;
    const albumName = song.album.name;
    return [num, cover, songName, albumName];
  });
}

const SongTable = props => {
  const { classes, songs, tableTitle, tableSubtitle } = props;
  return (
    <div>
      <Card>
        <CardHeader color="info">
          <h4 className={classes.cardTitleWhite}>{tableTitle}</h4>
          <p className={classes.cardCategoryWhite}>{tableSubtitle}</p>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="info"
            tableHead={['', '', 'Title', 'Album']}
            tableData={createData(songs)}
          />
        </CardBody>
      </Card>
    </div>
  );
};

SongTable.propTypes = {
  songs: PropTypes.array.isRequired,
  tableTitle: PropTypes.string.isRequired,
  tableSubtitle: PropTypes.string
};

export default withStyles(styles)(SongTable);
