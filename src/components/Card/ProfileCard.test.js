import React from 'react';
import { ProfileCard } from './ProfileCard';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<ProfileCard /> component', () => {
  it('should render default Props', () => {
    const wrapper = shallow(<ProfileCard classes={{}} />);
    const product = wrapper.find('[data-product]');
    const country = wrapper.find('[data-country]');
    const followers = wrapper.find('[data-followers]');
    const name = wrapper.find('[data-name]');

    expect(product.text()).toBe('Product: premium');
    expect(country.text()).toBe('Country: MX');
    expect(followers.text()).toBe('Followers: 12');
    expect(name.text()).toBe('Hugo Licon');
  });

  it('should render props', () => {
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
    const wrapper = shallow(
      <ProfileCard classes={{}} currentUser={currentUser} />
    );
    const product = wrapper.find('[data-product]');
    const country = wrapper.find('[data-country]');
    const followers = wrapper.find('[data-followers]');
    const name = wrapper.find('[data-name]');

    expect(product.text()).toBe(`Product: ${currentUser.product}`);
    expect(country.text()).toBe(`Country: ${currentUser.country}`);
    expect(followers.text()).toBe(`Followers: ${currentUser.followers.total}`);
    expect(name.text()).toBe(currentUser.display_name);
  });

  it('should match the snapshot', () => {
    const tree = shallow(<ProfileCard classes={{}} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
