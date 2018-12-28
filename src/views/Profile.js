import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentUser } from '../actions/userActions';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import ProfileCard from '../components/Card/ProfileCard';

class Profile extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { currentUser } = this.props;
    const isEmpty = Object.keys(currentUser).length === 0;
    if (!isEmpty) {
      return (
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <ProfileCard currentUser={currentUser} />
          </GridItem>
        </GridContainer>
      );
    } else {
      return <h1>No current user</h1>;
    }
  }
}

Profile.propTypes = {
  currentUser: PropTypes.object.isRequired
};

Profile.defaultProps = {
  currentUser: {
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
)(Profile);
