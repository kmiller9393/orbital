import React from 'react';
import { shallow } from 'enzyme';
import { Home, mapDispatchToProps } from './Home';
import { populateTriviaFacts } from '../../thunks/populateTriviaFacts';
import { populateReview } from '../../thunks/populateReview';

jest.mock('../../thunks/populateTriviaFacts');
jest.mock('../../thunks/populateReview');

describe('Home', () => {
  let wrapper;
  let mockPopulateTrivia;
  let mockPopulateReview;

  beforeEach(() => {
    mockPopulateTrivia = jest.fn();
    mockPopulateReview = jest.fn();
    wrapper = shallow(
      <Home
        populateTrivia={mockPopulateTrivia}
        populateReview={mockPopulateReview}
      />
    );
  });

  describe('Home component', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should call setTriviaItems when the Trivia Center button is clicked', () => {
      const spy = jest.spyOn(wrapper.instance(), 'setTriviaItems');
      wrapper.instance().forceUpdate();
      wrapper.find('[name="trivia-link"]').simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    it('should call setReviewItems when the Review button is clicked', () => {
      const spy = jest.spyOn(wrapper.instance(), 'setReviewItems');
      wrapper.instance().forceUpdate();
      wrapper.find('[name="review-link"]').simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = populateTriviaFacts();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.populateTrivia();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = populateReview();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.populateReview();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
