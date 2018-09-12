import { combineReducers } from 'redux';
import { populateReducer } from './populateReducer';
import { triviaReducer } from './triviaReducer';

const rootReducer = combineReducers({
  glossary: populateReducer,
  triviaAnswers: triviaReducer
});

export default rootReducer;
