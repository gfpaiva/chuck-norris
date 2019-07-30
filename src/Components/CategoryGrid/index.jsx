import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '../Card';
import Grid from '../Grid';

import { getCategory } from '../../Utils/Categories';

import './CategoryGrid.scss';

function CategoryGrid({ active, categories }) {
  return (
    <div className="category-grid">
      {categories && !!categories.length && (
        <Grid>
            {
              categories.map((category) => {
                const detailCategory = getCategory(category) ? getCategory(category) : { icon: '', link: `/${category}`, content: category.toUpperCase };

                const { icon, content, link } = detailCategory;

                return (
                  <Card
                    className={`category-grid__item text-center px-0 py-4${active === category ? ' category-grid__item--active' : ''}`}
                    hover
                    key={content}
                    href={active !== category ? `/category${link}` : ''}
                  >
                    <span className="category-grid__icon">{icon}</span>
                    <br />
                    <span className="category-grid__name">{content}</span>
                  </Card>
                );
              })
            }
        </Grid>
      )}
    </div>
  );
}

CategoryGrid.defaultProps = {
  active: '',
};

CategoryGrid.propTypes = {
  active: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ facts: { categories } }) => ({ categories });

export default connect(mapStateToProps)(CategoryGrid);
