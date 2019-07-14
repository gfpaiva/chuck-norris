import React from 'react';
import wait from 'waait';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from '../../Providers/App.Context';
import App from './index';

import getCategories from '../../../__mocks__/getCategories';

describe('<App />', () => {
  it('should mount properly', async () => {
    fetch
      .once(JSON.stringify(getCategories));

    const wrapper = mount(
      <AppProvider>
        <Router>
          <App />
        </Router>
      </AppProvider>
    );

    // Before get fetch data (loading state)
    expect(wrapper.find('App')).toMatchSnapshot();

    await wait();
    wrapper.update();

    // Full load
    expect(wrapper.find('App')).toMatchSnapshot();
  })
});
