import { ArtistLink } from '../ArtistLink';
import React from 'react';
import { shallow } from 'enzyme';

describe('<ArtistLink/> component', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      title: 'Album test',
      artistId: '1',
      history: {
        push: jest.fn()
      }
    };
    wrapper = shallow(<ArtistLink {...props} />);
  });

  it('should render Artist Title', () => {
    expect(wrapper.find('span')).toHaveText(props.title);
  });

  it('should redirect to artist info on click', () => {
    wrapper.find('span').simulate('click');
    expect(props.history.push).toHaveBeenCalledWith(
      `/artist/${props.artistId}`
    );
  });
});
