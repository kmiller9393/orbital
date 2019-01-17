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

export const cleanEvents = events => {
  const spaceEvents = events.reduce((acc, item, index) => {
    acc.push({
      date: item.date,
      description: item.explanation,
      id: index,
      image: item.url,
      title: item.title
    });
    return acc;
  }, []);
  return spaceEvents;
};

export const addTriviaOne = triviaSet => {
  const firstTriviaSet = triviaSet.slice(0, 9);
  return firstTriviaSet;
};

export const addReviewOne = reviewSet => {
  const firstReviewSet = reviewSet.slice(0, 9);
  return firstReviewSet;
};

export const addTriviaTwo = triviaSet => {
  const secondTriviaSet = triviaSet.slice(9, 18);
  return secondTriviaSet;
};

export const addReviewTwo = reviewSet => {
  const secondReviewSet = reviewSet.slice(9, 18);
  return secondReviewSet;
};

export const addTriviaThree = triviaSet => {
  const thirdTriviaSet = triviaSet.slice(18, 27);
  return thirdTriviaSet;
};

export const addReviewThree = reviewSet => {
  const thirdReviewSet = reviewSet.slice(18, 27);
  return thirdReviewSet;
};

export const addTriviaFour = triviaSet => {
  const fourthTriviaSet = triviaSet.slice(27, 36);
  return fourthTriviaSet;
};

export const addReviewFour = reviewSet => {
  const fourthReviewSet = reviewSet.slice(27, 37);
  return fourthReviewSet;
};

export const addTriviaFive = triviaSet => {
  const fifthTriviaSet = triviaSet.slice(36, 45);
  return fifthTriviaSet;
};

export const addReviewFive = reviewSet => {
  const fifthReviewSet = reviewSet.slice(37, 47);
  return fifthReviewSet;
};

export const getCurrentDate = () => {
  let date = new Date(),
    month = '' + (date.getMonth() + 1),
    day = '' + date.getDate(),
    year = date.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

export const getPrevDate = () => {
  let date = new Date(),
    month = '' + (date.getMonth() + 1),
    day = '' + date.getDate() - 2,
    year = date.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};
