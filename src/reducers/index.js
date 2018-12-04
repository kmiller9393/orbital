import { combineReducers } from 'redux';
import { populateReducer } from './populateReducer';
import { triviaReducer } from './triviaReducer';
import { currentEventsReducer } from './currentEventsReducer';
import { scoreReducer } from './scoreReducer';

const rootReducer = combineReducers({
  glossary: populateReducer,
  triviaAnswers: triviaReducer,
  spaceEvents: currentEventsReducer,
  score: scoreReducer
});

export default rootReducer;
