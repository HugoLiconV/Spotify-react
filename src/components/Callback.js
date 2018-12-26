import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveToken } from '../actions/TokenActions';
import PropTypes from 'prop-types';

const styles = {
  root: {
    flexGrow: 1,
    textAlign: 'center',
    padding: '16px'
  }
};

class Callback extends Component {
  componentDidMount() {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (hashParams.access_token) {
      this.props.saveToken(hashParams.access_token);
      this.props.history.push('/playing');
    }
  }
  render() {
    return <h1>Loading...</h1>;
  }
}

Callback.propTypes = {
  saveToken: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      saveToken
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Callback);
