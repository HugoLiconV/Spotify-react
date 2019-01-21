import { TrackLink } from '../TrackLink';
import React from 'react';
import { shallow } from 'enzyme';
import { SUCCESS_NOTIFICATION } from '../../constants';

describe('<TrackLink/> component', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      title: 'Song test',
      uri: 'uri:test',
      play: jest.fn(),
      showNotification: jest.fn()
    };
    wrapper = shallow(<TrackLink {...props} />);
  });

  it('should render songTitle', () => {
    expect(wrapper.find('span')).toHaveText(props.title);
  });

  it('should play song on click', () => {
    wrapper.find('span').simulate('click');
    expect(props.play).toHaveBeenCalledWith({ uris: [props.uri] });
  });

  it('should show a notification when a song has played', () => {
    wrapper.find('span').simulate('click');
    expect(props.showNotification).toHaveBeenCalledWith(
      null,
      `${props.title} started playing.`,
      SUCCESS_NOTIFICATION
    );
  });
});
