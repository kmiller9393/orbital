import { addTriviaSet } from '../actions';
import { fetchSpaceFacts } from '../utils/apiCalls';
import { cleanFacts } from '../utils/helper';

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
