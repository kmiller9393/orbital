import Results, { mapDispatchToProps, mapStateToProps } from './Results';
import { resetScore } from '../../actions';

describe('Results', () => {
  describe('Results component', () => {});

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
