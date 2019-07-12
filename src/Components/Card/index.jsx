import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Card.scss';

export default function Card({
  children,
  className,
  hover,
  href,
}) {
  const classNames = `card${hover ? ' card--hover' : ''}${className ? ` ${className}` : ''}`;

  return href ? (
    <Link className={classNames} to={href}>
      {children}
    </Link>
  ) : (
    <div className={classNames}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  className: '',
  hover: false,
  href: '',
};

Card.propTypes = {
  hover: PropTypes.bool,
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
