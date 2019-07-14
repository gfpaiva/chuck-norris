import React from 'react';
import wait from 'waait';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from '../../Providers/App.Context';
import CategoryGrid from './index';

import getCategories from '../../../__mocks__/getCategories';

describe('<CategoryGrid />', () => {
  it('should mount properly', async () => {
    fetch
      .once(JSON.stringify(getCategories));

    const wrapper = mount(
      <AppProvider>
        <Router>
          <CategoryGrid />
        </Router>
      </AppProvider>
    );

    await wait();
    wrapper.update();

    expect(wrapper.find('CategoryGrid')).toMatchSnapshot();
  });

  it('should active category card with className', async () => {
    fetch
      .once(JSON.stringify(getCategories));

    const wrapper = mount(
      <AppProvider>
        <Router>
          <CategoryGrid active="dev" />
        </Router>
      </AppProvider>
    );

    await wait();
    wrapper.update();

    expect(wrapper.find('.card.category-grid__item--active')).toHaveLength(1);
    expect(wrapper.find('.card.category-grid__item--active .category-grid__name').text()).toBe('DEV');
  });
});
