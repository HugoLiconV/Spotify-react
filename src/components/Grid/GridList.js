import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
  const { classes, data, onTileClick } = props;

  const getGridListCols = () => {
    if (isWidthUp('xl', props.width)) {
      return props.xl || 4;
    } else if (isWidthUp('lg', props.width)) {
      return props.lg || 3;
    } else if (isWidthUp('md', props.width)) {
      return props.md || 2;
    } else if (isWidthUp('sm', props.width)) {
      return props.sm || 2;
    } else {
      return 1;
    }
  };

  const gridClasses = classNames({
    [classes.gridList]: !props.grid
  });

  if (data.length === 0) return <h4>{props.messageWhenEmpty || 'No items'}</h4>;
  return (
    <div className={classes.root}>
      <GridList
        className={gridClasses}
        spacing={10}
        cols={getGridListCols()}
        cellHeight={300}
      >
        {data.map((item, i) => (
          <GridListTile
            className={classes.tile}
            key={item.imgUrl + i}
            onClick={() => {
              onTileClick(item);
            }}
          >
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
  grid: PropTypes.bool,
  xl: PropTypes.number,
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
  messageWhenEmpty: PropTypes.string,
  onTileClick: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      imgUrl: PropTypes.string
    })
  )
};

export default withStyles(styles)(withWidth()(SingleLineGridList));
