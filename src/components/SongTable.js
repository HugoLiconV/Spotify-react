import React from 'react';
import Table from './Table';
import Card from './Card/Card';
import CardHeader from './Card/CardHeader';
import CardBody from './Card/CardBody';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import noImageFound from '../assets/img/no_image_found.png';
import AlbumCover from './AlbumCover';
import { millisToMinutesAndSeconds } from '../services/utils';

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

function getHeaders({ cover, album, duration }) {
  // These are default values, they are always shown
  const headers = ['#', 'Title'];
  cover && headers.push('');
  album && headers.push('Album');
  duration && headers.push('Duration');
  return headers;
}

function createData(songs, { cover, album, duration }) {
  if (songs.length === 0) return [];
  return songs.map((song, i) => {
    const row = [];
    const num = (i + 1).toString();
    row.push(num);
    const songName = song.name;
    row.push(songName);
    if (song.album) {
      if (cover) {
        const albumImage = getSmallerImage(song.album.images);
        const cover = <AlbumCover src={albumImage} width="32px" />;
        row.push(cover);
      }
      if (album) {
        const albumName = song.album && song.album.name;
        row.push(albumName);
      }
    }
    duration && row.push(millisToMinutesAndSeconds(song.duration_ms));
    return row;
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
            tableHead={getHeaders(props)}
            tableData={createData(songs, props)}
          />
        </CardBody>
      </Card>
    </div>
  );
};

SongTable.propTypes = {
  songs: PropTypes.array.isRequired,
  tableTitle: PropTypes.string.isRequired,
  cover: PropTypes.bool,
  album: PropTypes.bool,
  duration: PropTypes.bool
};

export default withStyles(styles)(SongTable);
