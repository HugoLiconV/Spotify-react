import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import cardAvatarStyle from '../../assets/styles/components/cardAvatarStyle';

function CardAvatar({ ...props }) {
  const { classes, children, className, plain, profile, ...rest } = props;

  const cardAvatarClasses = classNames(
    {
      [classes.cardAvatar]: true,
      [classes.cardAvatarProfile]: profile,
      [classes.cardAvatarPlain]: plain
    },
    className
  );
  return (
    <div className={cardAvatarClasses} {...rest}>
      {children}
    </div>
  );
}

CardAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  profile: PropTypes.bool,
  plain: PropTypes.bool
};

export default withStyles(cardAvatarStyle)(CardAvatar);
