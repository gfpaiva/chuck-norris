import React from 'react';
import wait from 'waait';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '../../Store';

import CategoryGrid from './index';

import getCategories from '../../../__mocks__/getCategories';

describe('<CategoryGrid />', () => {
  it('should mount properly', async () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <CategoryGrid categories={getCategories} />
        </Router>
      </Provider>
    );

    expect(wrapper.find('CategoryGrid')).toMatchSnapshot();
  });

  it('should active category card with className', async () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <CategoryGrid
            categories={getCategories}
            active="dev"
          />
        </Router>
      </Provider>
    );

    expect(wrapper.find('.card.category-grid__item--active')).toHaveLength(1);
    expect(wrapper.find('.card.category-grid__item--active .category-grid__name').text()).toBe('DEV');
  });
});
