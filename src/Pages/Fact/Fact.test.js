import React from 'react';
import wait from 'waait';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import store from '../../Store';

import Fact from './index';

import { getJoke, getOtherJoke } from '../../../__mocks__/getJoke';

window.scrollTo = jest.fn();

describe('<Fact />', () => {
  it('should mount properly', async () => {
    fetch
      .once(JSON.stringify(getJoke))

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ pathname: '/category/dev' }]}>
          <Fact match={{ params: { category: 'dev' } }} />
        </MemoryRouter>
      </Provider>
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
      .once(JSON.stringify(getOtherJoke));

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ pathname: '/category/dev' }]}>
          <Fact match={{ params: { category: 'dev' } }} />
        </MemoryRouter>
      </Provider>
    );

    await wait();
    wrapper.update();

    wrapper.find('.fact__refresh').simulate('click');

    await wait();
    wrapper.update();

    expect(wrapper.find('.card.fact__card').text()).toBe(`"${getOtherJoke.value}"`);
  });
});
