import ReviewContainer, { mapStateToProps } from './ReviewContainer';

describe('ReviewContainer', () => {
  describe('ReviewContainer component', () => {});

  describe('mapStateToProps', () => {
    it('should return an array of glossary objects', () => {
      const glossary = {
        name: 'Asteroid',
        definition:
          'A small solar system object composed mostly of rock. Many of these objects orbit the Sun between Mars and Jupiter. Their sizes range anywhere from 33 feet (10 meters) in diameter to less than 620 miles (1,000 kilometers). The largest known asteroid, Ceres, has a diameter of 579 miles (926 kilometers).',
        id: 0
      };

      const mockState = {
        glossary
      };
      const expected = {
        glossary: {
          name: 'Asteroid',
          definition:
            'A small solar system object composed mostly of rock. Many of these objects orbit the Sun between Mars and Jupiter. Their sizes range anywhere from 33 feet (10 meters) in diameter to less than 620 miles (1,000 kilometers). The largest known asteroid, Ceres, has a diameter of 579 miles (926 kilometers).',
          id: 0
        }
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});
