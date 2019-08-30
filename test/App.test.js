import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import App from '../client/src/components/App';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  const wrapper = shallow(<App />);

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('reviews are loaded onto page', () => {
    // const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getReviews');
    instance.componentDidMount();
    expect(instance.getReviews).toHaveBeenCalled();
  });

});