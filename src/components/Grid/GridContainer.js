import React from 'react';
import Grid from '@material-ui/core/Grid';

function GridContainer(props) {
  const { classes, children, ...rest } = props;
  return (
    <Grid container {...rest}>
      {children}
    </Grid>
  );
}

export default GridContainer;
