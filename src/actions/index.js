export const populatePage = glossary => ({
  type: 'POPULATE_PAGE',
  glossary
});

export const populateTrivia = triviaSet => ({
  type: 'POPULATE_TRIVIA',
  triviaSet
});
