import { AlbumLink } from '../AlbumLink';
import React from 'react';
import { shallow } from 'enzyme';

describe('<AlbumLink/> component', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      title: 'Album test',
      albumId: '1',
      history: {
        push: jest.fn()
      }
    };
    wrapper = shallow(<AlbumLink {...props} />);
  });

  it('should render album Title', () => {
    expect(wrapper.find('span')).toHaveText(props.title);
  });

  it('should redirect to album info on click', () => {
    wrapper.find('span').simulate('click');
    expect(props.history.push).toHaveBeenCalledWith(`/album/${props.albumId}`);
  });
});
