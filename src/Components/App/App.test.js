import React from 'react';
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

    await wait();
    wrapper.update();

    expect(wrapper.find('app')).toMatchSnapshot();
  })
});
