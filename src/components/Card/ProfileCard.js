import React from 'react';
import Button from '../Button/Button';
import Card from './Card';
import CardAvatar from './CardAvatar';
import CardBody from './CardBody';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  details: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& *': {
      margin: '10px'
    }
  }
};

const ProfileCard = props => {
  const { currentUser, classes } = props;
  return (
    <Card profile>
      <CardAvatar profile>
        <a href={currentUser.external_urls.spotify}>
          <img src={currentUser.images[0].url} alt="..." />
        </a>
      </CardAvatar>
      <CardBody profile>
        <div className={classes.details}>
          <h6 className={classes.cardCategory}>
            Product: {currentUser.product}
          </h6>
          <h6 className={classes.cardCategory}>
            Country: {currentUser.country}
          </h6>
          <h6 className={classes.cardCategory}>
            Followers: {currentUser.followers.total}
          </h6>
        </div>
        <h4 className={classes.cardTitle}>{currentUser.display_name}</h4>
        <p className={classes.description} />
        <Button color="primary" round href={currentUser.external_urls.spotify}>
          Account
        </Button>
      </CardBody>
    </Card>
  );
};

ProfileCard.propTypes = {
  currentUser: PropTypes.object.isRequired
};
export default withStyles(styles)(ProfileCard);
