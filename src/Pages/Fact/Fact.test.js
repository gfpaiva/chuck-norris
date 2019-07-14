import React from 'react';
import wait from 'waait';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import AppProvider from '../../Providers/App.Context';
import Fact from './index';

import getCategories from '../../../__mocks__/getCategories';
import { getJoke, getOtherJoke } from '../../../__mocks__/getJoke';

describe('<Fact />', () => {
  it('should mount properly', async () => {
    fetch
      .once(JSON.stringify(getJoke))
      .once(JSON.stringify(getCategories));

    const wrapper = mount(
      <AppProvider>
        <MemoryRouter initialEntries={[{ pathname: '/category/dev' }]}>
          <Fact match={{ params: { category: 'dev' } }} />
        </MemoryRouter>
      </AppProvider>
    );

    // Loading state
    expect(wrapper.find('Fact')).toMatchSnapshot();

    await wait();
    wrapper.update();

    expect(wrapper.find('.card.fact__card').text()).toBe(`"${getJoke.value}"`);
  });

  it('should handle with refresh joke', async () => {
    fetch
      .once(JSON.stringify(getJoke))
      .once(JSON.stringify(getCategories))
      .once(JSON.stringify(getOtherJoke));

    const wrapper = mount(
      <AppProvider>
        <MemoryRouter initialEntries={[{ pathname: '/category/dev' }]}>
          <Fact match={{ params: { category: 'dev' } }} />
        </MemoryRouter>
      </AppProvider>
    );

    await wait();
    wrapper.update();

    wrapper.find('.fact__refresh').simulate('click');

    await wait();
    wrapper.update();

    expect(wrapper.find('.card.fact__card').text()).toBe(`"${getOtherJoke.value}"`);
  });
});
