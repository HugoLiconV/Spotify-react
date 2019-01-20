import React from 'react';
import Button from './Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { withRouter } from 'react-router';

const GoBackButton = props => {
  function goBack() {
    props.history.goBack();
  }
  return (
    <Button color="white" aria-label="Go back" justIcon round onClick={goBack}>
      <ArrowBack />
    </Button>
  );
};

export default withRouter(GoBackButton);
