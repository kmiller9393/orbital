import { addSpaceEvents } from '../actions';
import { fetchPicsOfDay } from '../utils/apiCalls';
import { cleanEvents } from '../utils/helper';

export const populateEvents = () => {
  return async dispatch => {
    try {
      const events = await fetchPicsOfDay();
      const spaceEvents = cleanEvents(events);
      dispatch(addSpaceEvents(spaceEvents));
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
