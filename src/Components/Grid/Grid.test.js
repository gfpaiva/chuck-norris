import React from 'react';
import { mount } from 'enzyme';

import Grid from './index';

describe('<Grid />', () => {
  it('should mount with children properly', () => {

    const wrapper = mount(
      <Grid>
          <p>
            Test
          </p>
      </Grid>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should mount with item prop properly', () => {

    const wrapper = mount(<Grid items={['Test']} />);

    expect(wrapper).toMatchSnapshot();
  });
});
