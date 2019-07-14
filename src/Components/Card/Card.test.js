import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import Card from './index';

describe('<Card />', () => {
  it('should mount properly', async () => {

    const wrapper = mount(
      <Card>
          Test
      </Card>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should mount link properly', async () => {

    const wrapper = mount(
      <Router>
        <Card href="/">
            Test
        </Card>
      </Router>
    );

    expect(wrapper.find('Card')).toMatchSnapshot();
  });

  it('should mount class variations properly', async () => {

    const wrapper = mount(
      <Card hover className="test">
          Test
      </Card>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
