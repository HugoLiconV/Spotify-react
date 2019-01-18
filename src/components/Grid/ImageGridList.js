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

function ImageGridList(props) {
  const { classes, data, onTileClick } = props;

  const getGridListCols = () => {
    const { width, xl, lg, md, sm, xs } = props;
    if (isWidthUp('xl', width)) {
      return xl || 4;
    } else if (isWidthUp('lg', width)) {
      return lg || 3;
    } else if (isWidthUp('md', width)) {
      return md || 2;
    } else if (isWidthUp('sm', width)) {
      return sm || 2;
    } else if (isWidthUp('xs', width)) {
      return xs || 1;
    }
  };

  const gridClasses = classNames({
    [classes.gridList]: props.singleLine
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

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  singleLine: PropTypes.bool,
  xl: PropTypes.number,
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
  xs: PropTypes.number,
  messageWhenEmpty: PropTypes.string,
  onTileClick: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired
    })
  )
};

export default withStyles(styles)(withWidth()(ImageGridList));
