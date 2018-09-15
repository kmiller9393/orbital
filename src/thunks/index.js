import { addGlossary } from '../actions';
import { addTriviaSet } from '../actions';
import { fetchSpaceFacts } from '../utils/apiCalls';
import { cleanFacts } from '../utils/helper';

export const populateFacts = () => {
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

export const populateTriviaFacts = () => {
  return async dispatch => {
    try {
      const triviaItems = await fetchSpaceFacts();
      const triviaAnswers = cleanFacts(triviaItems);

      dispatch(addTriviaSet(triviaAnswers));
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
