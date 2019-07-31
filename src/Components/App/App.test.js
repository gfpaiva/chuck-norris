import React from 'react';
import wait from 'waait';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '../../Store';

import App from './index';

import getCategories from '../../../__mocks__/getCategories';

describe('<App />', () => {
  it('should mount properly', async () => {
    fetch
      .once(JSON.stringify(getCategories));

    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    // Before get fetch data (loading state)
    expect(wrapper.find('App')).toMatchSnapshot();

    await wait();
    wrapper.update();

    // Full load
    expect(wrapper.find('App')).toMatchSnapshot();
  })
});
