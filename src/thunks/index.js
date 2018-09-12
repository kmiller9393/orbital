import { populatePage } from '../actions';
import { populateTrivia } from '../actions';
import { fetchSpaceFacts } from '../utils/apiCalls';

export const populateFacts = () => {
  return async dispatch => {
    try {
      const facts = await fetchSpaceFacts();
      const factsWithId = facts.map((fact, i) => ({ ...fact, id: i }));
      dispatch(populatePage(factsWithId));
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const cleanFacts = () => {
  return async dispatch => {
    try {
      const triviaItems = await fetchSpaceFacts();

      const triviaAnswers = triviaItems.reduce((acc, item, index) => {
        acc.push({
          [item.name]: item.definition.split('.')[0],
          id: index
        });
        return acc;
      }, []);

      dispatch(populateTrivia(triviaAnswers));
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
