import { mapStateToProps } from './TriviaContainer';

describe('.TriviaContainer', () => {
  describe('mapStateToProps', () => {
    it('should return an array of objects', () => {
      const question = 'a small solar system object composed mostly of rock';
      const answer = 'Asteroid';
      const id = 0;

      const mockState = {
        triviaAnswers: [{ question, answer, id }]
      };

      const expected = {
        triviaAnswers: [{ question, answer, id }]
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});
