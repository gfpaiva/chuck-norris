import React from 'react';
import PropTypes from 'prop-types';

import './Grid.scss';
import Card from '../Card';

export default function Grid({ items, children }) {
  return (
    <div className="grid">
      {(items && items.length) ? (
        items.map((item, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <Card key={idx}>
            {item}
          </Card>
        ))
      ) : (
        children
      )}
    </div>
  );
}

Grid.defaultProps = {
  items: [],
  children: null,
};

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
