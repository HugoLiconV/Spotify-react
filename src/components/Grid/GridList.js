import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
  root: {
    overflow: 'hidden',
    backgroundColor: 'transparent'
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)'
  },
  title: {
    color: 'white',
    fontWeight: 'bold'
  },
  titleBar: {
    background: 'rgba(0,0,0,0.6)'
  },
  tile: {
    textAlign: 'center',
    cursor: 'pointer'
  }
});

function SingleLineGridList(props) {
  const { classes, data } = props;
  const getGridListCols = () => {
    if (isWidthUp('xl', props.width)) {
      return 4;
    } else if (isWidthUp('lg', props.width)) {
      return 3;
    } else if (isWidthUp('md', props.width)) {
      return 2;
    } else if (isWidthUp('sm', props.width)) {
      return 2;
    } else {
      return 1;
    }
  };

  if (data.length === 0) return <h4>{props.messageWhenEmpty || 'No items'}</h4>;
  return (
    <div className={classes.root}>
      <GridList
        className={classes.gridList}
        spacing={10}
        cols={getGridListCols()}
        cellHeight={300}
      >
        {data.map((item, i) => (
          <GridListTile className={classes.tile} key={item.imgUrl + i}>
            <img src={item.imgUrl} alt={item.title} />
            <GridListTileBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  messageWhenEmpty: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      imgUrl: PropTypes.string
    })
  )
};

export default withStyles(styles)(withWidth()(SingleLineGridList));
