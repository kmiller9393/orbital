import {
  cleanFacts,
  addTriviaOne,
  addTriviaTwo,
  addTriviaThree,
  addTriviaFour,
  addTriviaFive,
  addReviewOne,
  addReviewTwo,
  addReviewThree,
  addReviewFour,
  addReviewFive
} from './helper';
import {
  mockGlossaryItems,
  mockTriviaItems,
  nineTriviaItems1,
  nineTriviaItems2,
  nineTriviaItems3,
  nineTriviaItems4,
  nineTriviaItems5,
  nineReviewItems1,
  nineReviewItems2,
  nineReviewItems3,
  tenReviewItems4,
  tenReviewItems5
} from './mockData';

describe('helper', () => {
  describe('cleanFacts', () => {
    it('should return the cleaned data', async () => {
      const fetchedSpaceData = await cleanFacts(mockGlossaryItems);

      expect(fetchedSpaceData).toEqual(mockTriviaItems);
    });
  });

  describe('trivia helper methods', () => {
    it('addTriviaOne should return the first 9 objects from the triviaAnswers array', () => {
      const planetFacts = addTriviaOne(mockTriviaItems);

      expect(planetFacts).toEqual(nineTriviaItems1);
    });

    it('addTriviaTwo should return the next 9 objects from the triviaAnswers array', () => {
      const planetFacts = addTriviaTwo(mockTriviaItems);

      expect(planetFacts).toEqual(nineTriviaItems2);
    });

    it('addTriviaThree should return the next 9 objects from the triviaAnswers array', () => {
      const planetFacts = addTriviaThree(mockTriviaItems);

      expect(planetFacts).toEqual(nineTriviaItems3);
    });

    it('addTriviaFour should return the next 9 objects from the triviaAnswers array', () => {
      const planetFacts = addTriviaFour(mockTriviaItems);

      expect(planetFacts).toEqual(nineTriviaItems4);
    });

    it('addTriviaFive should return the next 9 objects from the triviaAnswers array', () => {
      const planetFacts = addTriviaFive(mockTriviaItems);

      expect(planetFacts).toEqual(nineTriviaItems5);
    });
  });

  describe('review helper methods', () => {
    it('addReviewOne should return the first 9 objects from the glossary', () => {
      const planetReviewInfo = addReviewOne(mockGlossaryItems);

      expect(planetReviewInfo).toEqual(nineReviewItems1);
    });

    it('addReviewTwo should return the next 9 objects from the glossary', () => {
      const planetReviewInfo = addReviewTwo(mockGlossaryItems);

      expect(planetReviewInfo).toEqual(nineReviewItems2);
    });

    it('addReviewThree should return the next 9 objects from the glossary', () => {
      const planetReviewInfo = addReviewThree(mockGlossaryItems);

      expect(planetReviewInfo).toEqual(nineReviewItems3);
    });

    it('addReviewFour should return the next 9 objects from the glossary', () => {
      const planetReviewInfo = addReviewFour(mockGlossaryItems);

      expect(planetReviewInfo).toEqual(tenReviewItems4);
    });

    it('addReviewFive should return the next 9 objects from the glossary', () => {
      const planetReviewInfo = addReviewFive(mockGlossaryItems);

      expect(planetReviewInfo).toEqual(tenReviewItems5);
    });
  });
});
