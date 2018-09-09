export const populateReducer = (state = {}, action) => {
  switch (action.type) {
    case 'POPULATE_PAGE':
      return { ...action.loadingData.rovers };
    default:
      return state;
  }
};
