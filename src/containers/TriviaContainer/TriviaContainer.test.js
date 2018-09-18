import React from 'react';
import { shallow } from 'enzyme';
import {
  TriviaContainer,
  mapStateToProps,
  mapDispatchToProps
} from './TriviaContainer';
import { addScore } from '../../actions';

describe('TriviaContainer', () => {
  let wrapper;
  let mockTriviaAnswers;
  let mockHistory;
  let mockEvent;

  beforeEach(() => {
    mockTriviaAnswers = [
      {
        question: 'a small solar system object composed mostly of rock"',
        answer: 'Asteroid',
        id: 0
      }
    ];

    mockEvent = {
      target: {
        innerText: 'Asteroid',
        value: 7
      }
    };

    mockHistory = {
      location: {
        pathname: '/review-one'
      },
      replace: () => jest.fn()
    };
  });

  describe('TriviaContainer component', () => {
    it('should match the snapshot', () => {
      wrapper = shallow(
        <TriviaContainer
          triviaAnswers={mockTriviaAnswers}
          history={mockHistory}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('should call checkAnswer when a possible answer is clicked', () => {
      wrapper = shallow(
        <TriviaContainer
          triviaAnswers={mockTriviaAnswers}
          history={mockHistory}
        />
      );
      const spy = jest.spyOn(wrapper.instance(), 'checkAnswer');
      wrapper.instance().forceUpdate();
      wrapper.find('.choice-card').simulate('click', mockEvent);
      expect(spy).toHaveBeenCalledWith(mockEvent);
    });
  });

  describe('mapStateToProps', () => {
    it('should return an array of triviaAnswer objects and the score', () => {
      const question = 'a small solar system object composed mostly of rock';
      const answer = 'Asteroid';
      const id = 0;

      const mockState = {
        triviaAnswers: [{ question, answer, id }],
        score: 0
      };

      const expected = {
        triviaAnswers: [{ question, answer, id }],
        score: 0
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addScore(0);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addScore(0);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
