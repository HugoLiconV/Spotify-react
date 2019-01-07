import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Card from '../components/Card/Card';
import CardBody from '../components/Card/CardBody';
import Button from '../components/Button/Button';
import SpotifyService from '../services/spotifyApi';

const styles = {
  cardTitle: {
    fontSize: '20px'
  },
  container: {
    height: '-webkit-fill-available',
    backgroundColor: '#00acc1',
    padding: '15px'
  }
};

const LoginSpotify = props => {
  const { classes } = props;
  const spotifyService = new SpotifyService();
  const url = spotifyService.getUrl();
  return (
    <div className={classes.container}>
      <Card profile>
        <CardBody profile>
          <h4 className={classes.cardTitle}>Spotify Client</h4>
          <p>
            This is a Spotify client, but before you can use it, you need to
            login in Spotify
          </p>
          <Button color="primary" round href={url}>
            Login in Spotify
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

LoginSpotify.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginSpotify);
