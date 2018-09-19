export const scoreReducer = (state = 0, action) => {
  switch (action.type) {
  case 'ADD_SCORE':
    return action.score + 1;
  case 'RESET_SCORE':
    return 0;
  default:
    return state;
  }
};
