import * as actions from '../actions';
import { populateReducer } from './populateReducer';
import { mockGlossaryItems } from '../utils/mockData';

describe('populateReducer', () => {
  it('should return initial state by default', () => {
    const expected = [];
    const result = populateReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an array of glossary items', () => {
    const expected = mockGlossaryItems;
    const result = populateReducer([], actions.populatePage(mockGlossaryItems));
    expect(result).toEqual(expected);
  });
});
