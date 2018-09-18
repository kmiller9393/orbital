import { populateReview } from './populateReview';
import { mockGlossaryItems1 } from '../utils/mockData';
jest.mock('../utils/apiCalls');

describe('populateReview thunk', () => {
  it('should cal dispatch with the correct params', async () => {
    const mockDispatch = jest.fn();
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve({ status: 200 }) })
      );
    await populateReview()(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(...mockGlossaryItems1);
  });
});
