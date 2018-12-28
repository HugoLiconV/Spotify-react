import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentUser } from '../actions/userActions';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import CardAvatar from '../components/Card/CardAvatar';
import CardBody from '../components/Card/CardBody';
import { withStyles } from '@material-ui/core';

const styles = {
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none'
  },
  details: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& *': {
      margin: '10px'
    }
  }
};

class Profile extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { currentUser, classes } = this.props;
    const isEmpty = Object.keys(currentUser).length === 0;
    if (!isEmpty) {
      return (
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
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
                <h4 className={classes.cardTitle}>
                  {currentUser.display_name}
                </h4>
                <p className={classes.description} />
                <Button
                  color="primary"
                  round
                  href={currentUser.external_urls.spotify}
                >
                  Account
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      );
    } else {
      return <h1>NO current user</h1>;
    }
  }
}

Profile.propTypes = {
  currentUser: PropTypes.object.isRequired
};

Profile.defaultProps = {
  currentUser: {
    birthdate: '1996-06-28',
    country: 'MX',
    display_name: 'Hugo Licon',
    email: 'hugo280603@gmail.com',
    external_urls: {
      spotify: 'https://open.spotify.com/user/hugofernandoliconvalenzuela'
    },
    followers: {
      href: null,
      total: 12
    },
    id: 'hugofernandoliconvalenzuela'
  }
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.curretUser
  };
};

export default connect(
  mapStateToProps,
  { getCurrentUser }
)(withStyles(styles)(Profile));
