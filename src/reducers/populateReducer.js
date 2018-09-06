export const populateReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'POPULATE_PAGE':
      return [...action.loadingData];
    default:
      return state;
  }
};
