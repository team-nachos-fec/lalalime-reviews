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

  test('mouse entering username shows user popup', () => {
    wrapper
      .find('a.username')
      .simulate('mouseEnter', {
        preventDefault: () => {}
      });
    expect(wrapper.state('isUserPopupShown')).toBe(true);
  });

  test('mouse leaving user popup hides user popup', () => {
    wrapper
      .find('.user-popup')
      .simulate('mouseLeave', {
        preventDefault: () => {}
      });
    expect(wrapper.state('isUserPopupShown')).toBe(false);
  });

  test('clicking report link shows report popup', () => {
    wrapper
      .find('.footer-report a')
      .simulate('click', {
        preventDefault: () => {}
      })
    expect(wrapper.state('isReportPopupShown')).toBe(true);
  });

  test('clicking submit button in report popup hides report popup', () => {
    wrapper
      .find('.submit-btn')
      .simulate('click', {
        preventDefault: () => {}
      });
    expect(wrapper.state('isReportPopupShown')).toBe(false);
  });

  test('clicking cancel button in report popup hides report popup', () => {
    wrapper
      .setState({
        isReportPopupShown: true
      })
      .find('.cancel-btn')
      .simulate('click', {
        preventDefault: () => {}
      });
    expect(wrapper.state('isReportPopupShown')).toBe(false);
  });

  // test('clicking yes link shows thank you popup', () => {
  //   console.log(wrapper.state('clickableLinkForYes'));
  //   console.log(wrapper.state('isThankYouPopupShown'));
  //   wrapper
  //     .setState({
  //       // isThankYouPopupShown: true
  //     });
  //     .find('a.yes-link')
  //     .simulate('click', {
  //         preventDefault: () => {
  //       }
  //     });
  //   console.log(wrapper.state('isThankYouPopupShown'))
  //   expect(wrapper.state('isThankYouPopupShown')).toBe(true);
  // });

  // test('clicking "yes" link changes "no" link to unclickable link', () => {
  //   console.log(wrapper.state('clickableLinkForNo'))
  //   console.log(wrapper.state('clickableLinkForYes'))
  //   wrapper
  //     .setState({

  //     })
  //     .find('.yes')
  //     .simulate('click', {
  //       preventDefault: () => {
  //       }
  //     })
  //   expect(wrapper.state('clickableLinkForNo')).toBe(false);
  // });

  test('clicking close link in thank you popup hides thank you popup', () => {
    wrapper
      .setState({
        isThankYouPopupShown: true
      })
      .find('.popup-close-button')
      .simulate('click', {
        preventDefault: () => {}
      });
    expect(wrapper.state('isThankYouPopupShown')).toBe(false);
  });

});