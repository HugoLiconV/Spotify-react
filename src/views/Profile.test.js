import React from 'react';
import { Profile } from './Profile';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ProfileCard } from '../components/Card/ProfileCard';

describe('<Profile /> component', () => {
  const setup = newProps => {
    const props = {
      getCurrentUser: jest.fn(),
      currentUser: {},
      ...newProps
    };

    const wrapper = shallow(
      <Profile
        currentUser={props.currentUser}
        getCurrentUser={props.getCurrentUser}
      />
    );

    return { wrapper, props };
  };

  it('should fetch currentUser', () => {
    const spy = jest.spyOn(Profile.prototype, 'componentDidMount');
    const { props } = setup();
    expect(spy).toHaveBeenCalled();
    expect(props.getCurrentUser).toHaveBeenCalled();
  });

  it('should show No current user if current user is empty', () => {
    const { wrapper } = setup();
    expect(wrapper.text()).toBe('No current user');
  });

  it('should show ProfileCard if current user is not empty', () => {
    const currentUser = {
      country: 'MX',
      display_name: 'Hugo Licon',
      external_urls: {
        spotify: 'https://open.spotify.com/user/hugofernandoliconvalenzuela'
      },
      followers: {
        href: null,
        total: 12
      },
      images: [
        {
          height: null,
          url:
            'https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/11880385_912284995474857_7569056323770464976_n.jpg?_nc_cat=109&_nc_ht=scontent.xx&oh=8dea37fe4bd092920aa0a9277f85d1f0&oe=5CD0F3C5',
          width: null
        }
      ],
      product: 'premium',
      id: 'hugofernandoliconvalenzuela'
    };
    const { wrapper } = setup({ currentUser });
    expect(wrapper.find('[data-profile-card]')).toExist();
  });

  it('should match snapshot', () => {
    const { wrapper: tree } = setup();
    expect(toJson(tree)).toMatchSnapshot();
  });
});
