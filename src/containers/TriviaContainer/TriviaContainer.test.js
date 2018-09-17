import TriviaContainer, {
  mapStateToProps,
  mapDispatchToProps
} from './TriviaContainer';
import { addScore } from '../../actions';

describe('.TriviaContainer', () => {
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
