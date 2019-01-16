import React from 'react';
import { shallow } from 'enzyme';
import { Artist } from './Artist';
import toJson from 'enzyme-to-json';

let props;
let wrapper;

beforeEach(() => {
  props = {
    match: { params: { id: 1 }, isExact: true, path: '', url: '' },
    artist: {
      name: 'Arctic Monkeys',
      images: [
        {
          height: 640,
          url: 'a.png',
          width: 640
        },
        {
          height: 320,
          url: 'b.png',
          width: 320
        },
        {
          height: 160,
          url: 'c.png',
          width: 160
        }
      ],
      followers: {
        href: null,
        total: 7216088
      }
    },
    artistsAlbums: {},
    artistsTopTracks: [],
    artistRelatedArtists: {},
    getArtist: jest.fn(),
    getArtistsAlbums: jest.fn(),
    getArtistsTopTracks: jest.fn(),
    getArtistsRelatedArtists: jest.fn(),
    classes: {
      coverImage: 'coverImage',
      artistName: 'artistName',
      followers: 'followers',
      text: 'text'
    }
  };
  wrapper = shallow(<Artist {...props} />);
});

describe('<Artist /> component', () => {
  it('should renders artist Info', () => {
    const title = wrapper.find('.artistName');
    const followers = wrapper.find('.followers');
    expect(title.text()).toBe('Arctic Monkeys');
    expect(followers.text()).toBe('Followers: 7,216,088');
  });

  it('should show cover with background image', () => {
    const cover = wrapper.find('.coverImage').get(0);
    // it shows the wider image, in this case is a.png
    expect(cover.props.style).toHaveProperty('background', "url('a.png')");
  });

  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('getWiderImage method', () => {
  it('should return no_image_found when an empty array is passed', () => {
    const result = wrapper.instance().getWiderImage();
    expect(result).toBe('no_image_found.png');
  });

  it('should return no_image_found when undefined is passed', () => {
    const result = wrapper.instance().getWiderImage();
    expect(result).toBe('no_image_found.png');
  });

  it('should return wider image when passing an array of images', () => {
    const images = [
      {
        height: 640,
        url: 'a.png',
        width: 640
      },
      {
        height: 300,
        url: 'b.png',
        width: 300
      },
      {
        height: 64,
        url: 'c.png',
        width: 64
      }
    ];
    const result = wrapper.instance().getWiderImage(images);
    expect(result).toBe('a.png');
  });
});

describe('getItemImage method', () => {
  it('should return no_image_found when passing undefined', () => {
    const result = wrapper.instance().getItemImage();
    expect(result).toBe('no_image_found.png');
  });

  it('should return no_image_found when passing an emtpy array', () => {
    const result = wrapper.instance().getItemImage([]);
    expect(result).toBe('no_image_found.png');
  });

  it('should return image with expected size', () => {
    const images = [
      {
        height: 640,
        url: 'a.png',
        width: 640
      },
      {
        height: 300,
        url: 'b.png',
        width: 300
      },
      {
        height: 64,
        url: 'c.png',
        width: 64
      }
    ];
    const result = wrapper.instance().getItemImage(images, 200, 350);
    expect(result).toBe('b.png');
  });

  it('should return first image from array when doesnt find one with expected size', () => {
    const images = [
      {
        height: 640,
        url: 'a.png',
        width: 640
      },
      {
        height: 300,
        url: 'b.png',
        width: 300
      },
      {
        height: 64,
        url: 'c.png',
        width: 64
      }
    ];
    const result = wrapper.instance().getItemImage(images, 700, 800);
    expect(result).toBe('a.png');
  });
});
