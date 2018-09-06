import { combineReducers } from 'redux';
import { populateReducer } from './populateReducer';
// import { loginReducer } from './login-reducer';
// import { favoritesReducer } from './favorites-reducer';

const rootReducer = combineReducers({
  spaceData: populateReducer
  //   userLogin: loginReducer,
  //   favorites: favoritesReducer
});

export default rootReducer;
