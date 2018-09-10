import { combineReducers } from 'redux';
import { populateReducer } from './populateReducer';

const rootReducer = combineReducers({
  facts: populateReducer
});

export default rootReducer;
