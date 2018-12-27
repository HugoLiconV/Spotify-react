import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentUser } from '../actions/userActions';
class Profile extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const user = this.props.currentUser;
    return (
      <div>
        <h1>Profile</h1>
        {console.log(user)}
      </div>
    );
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
