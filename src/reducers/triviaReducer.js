export const triviaReducer = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_TRIVIA':
      return [...action.triviaSet];
    default:
      return state;
  }
};
