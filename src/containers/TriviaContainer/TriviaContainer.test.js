import React from 'react';
import { shallow } from 'enzyme';
import {
  TriviaContainer,
  mapStateToProps,
  mapDispatchToProps
} from './TriviaContainer';
import { mockTriviaItems } from '../../utils/mockData';
import { addScore } from '../../actions';

describe('TriviaContainer', () => {
  let wrapper;
  let mockTriviaAnswers;
  let mockHistory;
  let mockLocation;
  let mockEvent;
  let mockAddScore;

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

    mockLocation = {
      pathname: '/review-one'
    };

    mockAddScore = jest.fn();

    wrapper = shallow(
      <TriviaContainer
        triviaAnswers={mockTriviaAnswers}
        history={mockHistory}
        location={mockLocation}
        addScore={mockAddScore}
      />
    );
  });

  describe('TriviaContainer component', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should call checkAnswer when a possible answer is clicked', () => {
      const spy = jest.spyOn(wrapper.instance(), 'checkAnswer');

      wrapper.instance().forceUpdate();
      wrapper.find('.choice-card').simulate('click', mockEvent);

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });

    it('should call checkAnswer when the next possible answer is clicked', () => {
      const spy = jest.spyOn(wrapper.instance(), 'checkAnswer');

      wrapper.instance().forceUpdate();
      wrapper.find('.option').simulate('click', mockEvent);

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });

    it('should call checkAnswer when the next possible answer is clicked', () => {
      const spy = jest.spyOn(wrapper.instance(), 'checkAnswer');

      wrapper.instance().forceUpdate();
      wrapper.find('.choice').simulate('click', mockEvent);

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });

    it('should call checkAnswer when the next possible answer it clicked', () => {
      const triviaItems = [...mockTriviaItems];
      const spy = jest.spyOn(wrapper.instance(), 'checkAnswer');

      wrapper.setState({ triviaItems, ready: true });

      wrapper.instance().forceUpdate();
      wrapper.find('.trivia-card').simulate('click', mockEvent);

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
