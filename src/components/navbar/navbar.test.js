import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './navbar';

describe('NavBar', () => {
  it('should render', () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper).toHaveLength(1);
  });
});
