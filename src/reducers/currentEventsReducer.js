export const currentEventsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SPACE_EVENTS':
      return [...action.events];
    default:
      return state;
  }
};
