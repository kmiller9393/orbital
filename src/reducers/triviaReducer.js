export const triviaReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TRIVIA_SET':
    return [...action.triviaSet];
  default:
    return state;
  }
};
