import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReviewPageLinks from '../client/src/components/ReviewPageLinks';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('ReviewPageLinks component', () => {
  test('renders', () => {
    const wrapper = shallow(<ReviewPageLinks />);
      expect(wrapper.exists()).toBe(true);
  });
});