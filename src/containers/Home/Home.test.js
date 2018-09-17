import { Home, mapDispatchToProps } from './Home';
import { populateTriviaFacts } from '../../thunks/populateTriviaFacts';
import { populateReview } from '../../thunks/populateReview';
jest.mock('../../thunks/populateTriviaFacts');
jest.mock('../../thunks/populateReview');

describe('Home', () => {
  describe('Home component', () => {});

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = populateTriviaFacts();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.populateTrivia();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = populateReview();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.populateReview();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
