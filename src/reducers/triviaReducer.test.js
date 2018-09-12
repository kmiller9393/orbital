import * as actions from '../actions';
import { triviaReducer } from './triviaReducer';
import { mockTriviaItems } from '../utils/mockData';

describe('triviaReducer', () => {
  it('should return the initial state by default', () => {
    const expected = [];
    const result = triviaReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an array of modified glossary items (answers)', () => {
    const expected = mockTriviaItems;
    const result = triviaReducer([], actions.populateTrivia(mockTriviaItems));
    expect(result).toEqual(expected);
  });
});
