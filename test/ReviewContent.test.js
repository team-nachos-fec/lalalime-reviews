import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReviewContent from '../client/src/components/ReviewContent';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('ReviewContent component', () => {
  const ReviewContentProps = {
    review: {
      wasThisReviewHelpfulYes: 1,
      wasThisReviewHelpfulNo: 0,
      location: 'Los Angeles, CA',
      athleticType: 'runner',
      ageRange: '18-24',
      bodyType: 'slim',
      reviewDate: 'August 27, 2019'
    }
  };
  test('renders', () => {
    const wrapper = shallow(<ReviewContent {...ReviewContentProps} />);
      expect(wrapper.exists()).toBe(true);
  });
});