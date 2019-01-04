import React from 'react';
import { MediaControls } from './MediaControls';
import { shallow } from 'enzyme';

describe('<MediaControls /> component', () => {
  let wrapper;
  let currentPlayback;
  let props;
  beforeEach(() => {
    props = {
      nextSong: jest.fn(),
      previousSong: jest.fn(),
      onShuffleClick: jest.fn(),
      isPlaying: true,
      onRepeatClick: jest.fn(),
      onPauseClick: jest.fn(),
      shuffle: true,
      repeatState: 'off',
      classes: {
        blue: ''
      }
    };
    wrapper = shallow(<MediaControls {...props} />);
  });

  it('should show shuffle button', () => {
    expect(wrapper.find('#shuffle')).toExist();
  });

  it('should show previous button', () => {
    expect(wrapper.find('#previous')).toExist();
  });

  it('should show pause button when there is music playing', () => {
    wrapper = shallow(<MediaControls {...props} isPlaying={true} />);
    expect(wrapper.find('#pause')).toExist();
  });

  it('should show play button when there no is music playing', () => {
    wrapper = shallow(<MediaControls {...props} isPlaying={false} />);
    expect(wrapper.find('#play')).toExist();
  });

  it('should show next button', () => {
    expect(wrapper.find('#next')).toExist();
  });

  it('should show repeat button', () => {
    expect(wrapper.find('#repeat')).toExist();
  });
  /*
      * it should toggle shuffle
        - it should change icon
      * it should skip User's Playback To Previous Track
      * it should skip User's Playback To Next Track
      * it should pause song
       - it should change icon
      * it should resume song
        - it should keek context
        - it should change icon
      * it should toggle repeat
        - it should change icon
      * it should show current device
      * it should change device
      * it has volume controls 
  */
});
