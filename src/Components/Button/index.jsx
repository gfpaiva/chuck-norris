import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export default function Button({
  small, className, children, ...rest
}) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={`${small ? 'button--small ' : ''}${className ? `${className} ` : ''}button bg-secondary color-primary`}
      {...rest}
    >
      <span className="button__content">
        {children}
      </span>
    </button>
  );
}

Button.defaultProps = {
  small: false,
  className: '',
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  small: PropTypes.bool,
  className: PropTypes.string,
};
