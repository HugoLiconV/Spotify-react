import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import cardHeaderStyle from '../../assets/styles/components/cardHeaderStyle';

function CardHeader({ ...props }) {
  const {
    classes,
    className,
    children,
    color,
    plain,
    stats,
    icon,
    ...rest
  } = props;
  const cardHeaderClasses = classNames(
    {
      [classes.cardHeader]: true,
      [classes[color + 'CardHeader']]: color,
      [classes.cardHeaderPlain]: plain,
      [classes.cardHeaderStats]: stats,
      [classes.cardHeaderIcon]: icon
    },
    className
  );
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['info']),
  plain: PropTypes.bool,
  stats: PropTypes.bool,
  icon: PropTypes.bool
};

export default withStyles(cardHeaderStyle)(CardHeader);
