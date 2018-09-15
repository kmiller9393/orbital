export const populateReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_GLOSSARY':
    return [...action.glossary];
  default:
    return state;
  }
};
