import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import { hideError } from './actions/errorActions';
import SnackbarContentWrapper from './components/SnackbarContentWrapper';

class ErrorMessages extends Component {
  state = {
    open: false
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.props.hideError();
  };

  render() {
    const { message, show } = this.props;
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
          variant="error"
          message={message}
        />
      </Snackbar>
    );
  }
}

ErrorMessages.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  message: state.error.message,
  show: state.error.show
});

export default connect(
  mapStateToProps,
  { hideError }
)(ErrorMessages);
