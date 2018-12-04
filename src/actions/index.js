export const addGlossary = glossary => ({
  type: 'ADD_GLOSSARY',
  glossary
});

export const addTriviaSet = triviaSet => ({
  type: 'ADD_TRIVIA_SET',
  triviaSet
});

export const addSpaceEvents = events => ({
  type: 'ADD_SPACE_EVENTS',
  events
});

export const addScore = score => ({
  type: 'ADD_SCORE',
  score
});

export const resetScore = score => ({
  type: 'RESET_SCORE',
  score
});
