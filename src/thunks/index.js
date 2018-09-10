import { populatePage } from '../actions';
import { fetchSpaceFacts } from '../utils/apiCalls';

export const populateFacts = () => {
  return async dispatch => {
    try {
      const facts = await fetchSpaceFacts();
      const factsWithId = facts.map((fact, i) => ({ ...fact, id: i }));
      dispatch(populatePage(factsWithId));
    } catch (error) {
      throw new Error(error);
    }
  };
};
