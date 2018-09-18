import { fetchSpaceFacts } from './apiCalls';
import { mockGlossaryItems } from './mockData';

describe('apiCalls', () => {
  const response = { status: 'success', message: '2 row was deleted.' };

  beforeEach(() => {
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(response) })
      );
  });

  it('should call fetch with the correst params', async () => {
    const url = 'http://hubblesite.org/api/v3/glossary?page=all';
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(mockGlossaryItems) })
      );
    const result = await fetchSpaceFacts(url);
    expect(result).toEqual(mockGlossaryItems);
  });

  it('should throw an error if status code is not ok', async () => {
    const expected = new Error('Error Fetching Space Facts');
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.reject(new Error('Error Fetching Space Facts'))
      );

    await expect(fetchSpaceFacts()).rejects.toEqual(expected);
  });
});
