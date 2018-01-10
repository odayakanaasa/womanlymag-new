import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './navbar';

describe('NavBar', () => {
  const wrapper = shallow(<NavBar />);

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });
});
