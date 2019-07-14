import React from 'react';
import { shallow } from 'enzyme';

import Home from './index';

describe('<Home />', () => {
  it('should mount properly', () => {

    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  })
});
