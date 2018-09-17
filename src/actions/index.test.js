import * as actions from '../actions';

describe('actions', () => {
  it('should return type ADD_GLOSSARY with the glossary', () => {
    const name = 'Asteroid';
    const definition =
      'A small solar system object composed mostly of rock. Many of these objects orbit the Sun between Mars and Jupiter. Their sizes range anywhere from 33 feet (10 meters) in diameter to less than 620 miles (1,000 kilometers). The largest known asteroid, Ceres, has a diameter of 579 miles (926 kilometers).';
    const id = 0;

    const glossary = {
      name,
      definition,
      id
    };

    const expected = {
      type: 'ADD_GLOSSARY',
      glossary
    };

    const result = actions.addGlossary(glossary);
    expect(result).toEqual(expected);
  });

  it('should return type ADD_TRIVIA_SET with the triviaSet', () => {
    const question = 'a small solar system object composed mostly of rock';
    const answer = 'Asteroid';
    const id = 0;

    const triviaSet = {
      question,
      answer,
      id
    };

    const expected = {
      type: 'ADD_TRIVIA_SET',
      triviaSet
    };

    const result = actions.addTriviaSet(triviaSet);
    expect(result).toEqual(expected);
  });

  it('should return type ADD_SCORE with the updated score', () => {
    const score = 1;

    const expected = {
      type: 'ADD_SCORE',
      score
    };

    const result = actions.addScore(score);
    expect(result).toEqual(expected);
  });

  it('should return the RESET_SCORE with the reset score', () => {
    const score = 0;

    const expected = {
      type: 'RESET_SCORE',
      score
    };

    const result = actions.resetScore(score);
    expect(result).toEqual(expected);
  });
});
