import { AlbumCover } from '../AlbumCover';
import React from 'react';
import { shallow } from 'enzyme';

describe('<AlbumCover/> component', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      src: 'test.png',
      title: 'test'
    };
    wrapper = shallow(<AlbumCover {...props} />);
  });

  it('should render image ', () => {
    const img = wrapper.find('img');
    expect(img).toExist();
    expect(img.prop('src')).toBe(props.src);
  });

  it('should have width style', () => {
    props = { ...props, width: '50px' };
    wrapper = shallow(<AlbumCover {...props} />);
    expect(wrapper.find('img')).toHaveStyle('width', '50px');
  });
});
