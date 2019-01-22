import { Cover } from '../Cover';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Cover/> component', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      coverImage: 'test.png',
      title: 'test'
    };
    wrapper = shallow(
      <Cover {...props}>
        <h1>Test</h1>
      </Cover>
    );
  });

  it('should render props.children ', () => {
    // console.log(wrapper.debug());
    // const img = wrapper.find('img');
    // expect(img).toExist();
    // expect(img.prop('src')).toBe(props.src);
  });

  // it('should have width style', () => {
  //   props = { ...props, width: '50px' };
  //   wrapper = shallow(<Cover {...props} />);
  //   expect(wrapper.find('img')).toHaveStyle('width', '50px');
  // });
});
