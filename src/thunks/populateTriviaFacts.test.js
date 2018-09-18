import { populateTriviaFacts } from './populateTriviaFacts';
import { mockTriviaItems1 } from '../utils/mockData';
jest.mock('../utils/apiCalls');

describe('populateTriviaFacts thunk', () => {
  it('should call dispatch with the correct params', async () => {
    const mockDispatch = jest.fn();
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve({ status: 200 }) })
      );
    await populateTriviaFacts()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(...mockTriviaItems1);
  });
});
