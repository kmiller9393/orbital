import React from 'react';
import { shallow } from 'enzyme';
import { Results, mapDispatchToProps, mapStateToProps } from './Results';
import { resetScore } from '../../actions';

describe('Results', () => {
  let wrapper;
  let mockResetScore;
  let mockScore;

  beforeEach(() => {
    mockResetScore = jest.fn();
    wrapper = shallow(
      <Results resetScore={mockResetScore} score={mockScore} />
    );
  });

  describe('Results component', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should call the resetScore action creator when the link is clicked', () => {
      wrapper.find('.reset-link').simulate('click');
      expect(mockResetScore).toHaveBeenCalled();
    });

    it('should have a class of high-score if the score is greater than 6', () => {
      wrapper = shallow(<Results score={7} />);
      expect(wrapper.find('span').hasClass('high-score')).toEqual(true);
      expect(wrapper.find('span').hasClass('low-score')).toEqual(false);
    });

    it('should have a class of low-score if the score is less than 6', () => {
      wrapper = shallow(<Results score={5} />);
      expect(wrapper.find('span').hasClass('low-score')).toEqual(true);
      expect(wrapper.find('span').hasClass('high-score')).toEqual(false);
    });
  });

  describe('mapStateToProps', () => {
    it('should return an array of triviaAnswer objects and the score', () => {
      const triviaAnswers = {
        question: 'a small solar system object composed mostly of rock',
        answer: 'Asteroid',
        id: 0
      };

      const mockState = {
        triviaAnswers,
        score: 0
      };
      const expected = {
        score: 0,
        triviaAnswers: {
          answer: 'Asteroid',
          id: 0,
          question: 'a small solar system object composed mostly of rock'
        }
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });

    describe('mapDispatchToProps', () => {
      it('should call dispatch when using a function from mapDispatchToProps', () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = resetScore();

        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.resetScore();

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      });
    });
  });
});
