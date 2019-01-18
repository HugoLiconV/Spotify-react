import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import { hideNotification } from './actions/notificationActions';
import SnackbarContentWrapper from './components/SnackbarContentWrapper';
import { INFO_NOTIFICATION } from './constants';
class Notifications extends Component {
  state = {
    open: false
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.props.hideNotification();
  };

  render() {
    const { message, show, type } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={show}
        onClose={this.handleClose}
        autoHideDuration={3000}
      >
        <SnackbarContentWrapper
          onClose={this.handleClose}
          variant={type || INFO_NOTIFICATION}
          message={message}
        />
      </Snackbar>
    );
  }
}

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  message: state.notification.message,
  show: state.notification.show,
  type: state.notification.type
});

export default connect(
  mapStateToProps,
  { hideNotification }
)(Notifications);
