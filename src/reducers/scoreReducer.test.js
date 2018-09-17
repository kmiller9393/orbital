import * as actions from '../actions';
import { scoreReducer } from './scoreReducer';

describe('scoreReducer', () => {
  it('should return initial state by default', () => {
    const expected = 0;
    const result = scoreReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an updated score', () => {
    const mockScore = 0;
    const expected = 1;
    const result = scoreReducer(0, actions.addScore(mockScore));
    expect(result).toEqual(expected);
  });

  it('should reset the score', () => {
    const mockScore = 7;
    const expected = 0;
    const result = scoreReducer(0, actions.resetScore(mockScore));
    expect(result).toEqual(expected);
  });
});
