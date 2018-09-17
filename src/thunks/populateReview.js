import { addGlossary } from '../actions';
import { fetchSpaceFacts } from '../utils/apiCalls';

export const populateReview = () => {
  return async dispatch => {
    try {
      const facts = await fetchSpaceFacts();
      const factsWithId = facts.map((fact, i) => ({ ...fact, id: i }));
      dispatch(addGlossary(factsWithId));
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
