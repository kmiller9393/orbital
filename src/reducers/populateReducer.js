export const populateReducer = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_PAGE':
      return [...action.glossary];
    default:
      return state;
  }
};
