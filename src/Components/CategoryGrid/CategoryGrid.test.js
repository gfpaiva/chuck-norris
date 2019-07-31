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
    fetch
      .once(JSON.stringify(getCategories));

    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <CategoryGrid />
        </Router>
      </Provider>
    );

    await wait();
    wrapper.update();

    expect(wrapper.find('CategoryGrid')).toMatchSnapshot();
  });

  it('should active category card with className', async () => {
    fetch
      .once(JSON.stringify(getCategories));

    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <CategoryGrid active="dev" />
        </Router>
      </Provider>
    );

    await wait();
    wrapper.update();

    console.log('TCL: wrapper', wrapper.debug());

    expect(wrapper.find('.card.category-grid__item--active')).toHaveLength(1);
    expect(wrapper.find('.card.category-grid__item--active .category-grid__name').text()).toBe('DEV');
  });
});
