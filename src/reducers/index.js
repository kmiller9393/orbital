import { combineReducers } from 'redux';
import { populateReducer } from './populateReducer';
import { triviaReducer } from './triviaReducer';
import { scoreReducer } from './scoreReducer';

const rootReducer = combineReducers({
  glossary: populateReducer,
  triviaAnswers: triviaReducer,
  score: scoreReducer
});

export default rootReducer;
