import React from 'react';
import Button from '../Button/Button';
import Card from './Card';
import CardAvatar from './CardAvatar';
import CardBody from './CardBody';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import noImageFound from '../../assets/img/no_image_found.png';

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

const currentUser = {
  country: 'MX',
  display_name: 'Hugo Licon',
  external_urls: {
    spotify: 'https://open.spotify.com/user/hugofernandoliconvalenzuela'
  },
  followers: {
    href: null,
    total: 12
  },
  images: [
    {
      height: null,
      url:
        'https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/11880385_912284995474857_7569056323770464976_n.jpg?_nc_cat=109&_nc_ht=scontent.xx&oh=8dea37fe4bd092920aa0a9277f85d1f0&oe=5CD0F3C5',
      width: null
    }
  ],
  product: 'premium',
  id: 'hugofernandoliconvalenzuela'
};

const getProfilePicture = currentUser => {
  if (currentUser.images.length === 0) return noImageFound;
  return currentUser.images[0].url;
};
export const ProfileCard = props => {
  const { currentUser, classes } = props;
  return (
    <Card profile>
      <CardAvatar profile>
        <a href={currentUser.external_urls.spotify}>
          <img
            style={{ backgroundColor: 'white' }}
            src={getProfilePicture(currentUser)}
            alt={currentUser.display_name}
          />
        </a>
      </CardAvatar>
      <CardBody profile>
        <div className={classes.details}>
          <h6 className={classes.cardCategory} data-product>
            Product: {currentUser.product}
          </h6>
          <h6 className={classes.cardCategory} data-country>
            Country: {currentUser.country}
          </h6>
          <h6 className={classes.cardCategory} data-followers>
            Followers: {currentUser.followers.total}
          </h6>
        </div>
        <h4 className={classes.cardTitle} data-name>
          {currentUser.display_name}
        </h4>
        <Button color="primary" round href={currentUser.external_urls.spotify}>
          Account
        </Button>
      </CardBody>
    </Card>
  );
};

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired
};

ProfileCard.defaultProps = {
  currentUser
};
export default withStyles(styles)(ProfileCard);
