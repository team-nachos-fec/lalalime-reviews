import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
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

  const wrapper = shallow(<ReviewContent {...ReviewContentProps} />);

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  console.log('REVIEW PROFILE CHILD 1',wrapper.props('review').children[0].props.children[1].props.onMouseEnter);

  test('onMouseEnter changes false to true', () => {
    wrapper
      .find('a.username')
      .simulate('mouseEnter', {
          preventDefault: () => {
        }
      });
    expect(wrapper.state('isUserPopupShown')).toBe(true);
  })




  // console.log('REVIEW PROFILE CHILD 3',wrapper.props('review').children[0].props.children[3].props);
  // console.log('REVIEW PROFILE CHILD 4',wrapper.props('review').children[0].props.children[4].props);
  // console.log('REVIEW PROFILE CHILD 5',wrapper.props('review').children[0].props.children[5].props);


  // console.log('REVIEW CONTENT',wrapper.props('review').children[1].props);
  // console.log(wrapper.props('review').children[1].props.children[0].props);
  // console.log(wrapper.props('review').children[1].props.children[1].props);
});