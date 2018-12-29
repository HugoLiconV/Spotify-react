import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentUser } from '../actions/userActions';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import ProfileCard from '../components/Card/ProfileCard';

export class Profile extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { currentUser } = this.props;
    const isEmpty = currentUser && Object.keys(currentUser).length === 0;
    if (!isEmpty) {
      return (
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <ProfileCard data-profile-card currentUser={currentUser} />
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

const mapStateToProps = state => {
  return {
    currentUser: state.user.curretUser
  };
};

export default connect(
  mapStateToProps,
  { getCurrentUser }
)(Profile);
