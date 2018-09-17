export const cleanFacts = triviaFacts => {
  const triviaAnswers = triviaFacts.reduce((acc, item, index) => {
    acc.push({
      question: item.definition.split('.')[0].toLowerCase(),
      answer: item.name,
      id: index
    });
    return acc;
  }, []);
  return triviaAnswers;
};

export const addTriviaOne = triviaSet => {
  const firstTriviaSet = triviaSet.slice(0, 9);
  return firstTriviaSet;
};

export const addTriviaTwo = triviaSet => {
  const secondTriviaSet = triviaSet.slice(9, 18);
  return secondTriviaSet;
};

export const addTriviaThree = triviaSet => {
  const thirdTriviaSet = triviaSet.slice(18, 27);
  return thirdTriviaSet;
};

export const addTriviaFour = triviaSet => {
  const fourthTriviaSet = triviaSet.slice(27, 36);
  return fourthTriviaSet;
};

export const addTriviaFive = triviaSet => {
  const fifthTriviaSet = triviaSet.slice(36, 45);
  return fifthTriviaSet;
};
