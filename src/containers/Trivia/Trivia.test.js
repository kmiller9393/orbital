import { mapDispatchToProps } from './Trivia';

describe('Trivia', () => {
  describe('Trivia component', () => {});

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.populateTrivia({
        name: 'Asteroid',
        definition: 'A small piece of space material.'
      });
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
