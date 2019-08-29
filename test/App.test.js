import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import App from '../client/src/components/App';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ 
  adapter: new Adapter() 
});

describe('App component', () => {
  test('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  test('reviews are loaded onto page sorted by date', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'sortByDate');
    instance.componentDidMount();
    expect(instance.sortByDate).toHaveBeenCalled();
  });

});