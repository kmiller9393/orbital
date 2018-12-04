import { addGlossary } from '../actions';
import { fetchSpaceFacts } from '../utils/apiCalls';

export const populateReview = () => {
  return async dispatch => {
    try {
      const facts = await fetchSpaceFacts();
      const factsWithIds = facts.map((fact, i) => ({ ...fact, id: i }));
      dispatch(addGlossary(factsWithIds));
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
