import { combineReducers } from 'redux';
import { populateReducer } from './populateReducer';

const rootReducer = combineReducers({
  spaceData: populateReducer
});

export default rootReducer;
