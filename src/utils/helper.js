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
