import React from 'react';
import { shallow } from 'enzyme';
import Image from './image';

const defaultProps = {
  alt: 'This is an image',
  title: 'This is an image',
};

describe('Image', () => {
  it('returns null when no resolutions or sizes', () => {
    const wrapper = shallow(<Image {...defaultProps} />);

    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  it('renders', () => {
    const props = {
      ...defaultProps,
      resolutions: {
        base64: 'base64valueofsorts',
        height: 5,
        src: 'sourcey.jpg',
        srcSet: 'sourcey.jpg 200w, sourcey.jpg 400w',
        width: 5,
      },
    };

    const wrapper = shallow(<Image {...props} />);

    expect(wrapper).toHaveLength(1);
  });
});
