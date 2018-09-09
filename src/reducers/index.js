import { combineReducers } from 'redux';
import { populateReducer } from './populateReducer';

const rootReducer = combineReducers({
  rovers: populateReducer
});

export default rootReducer;
