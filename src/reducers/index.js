import { combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';

const rootReducer = combineReducers({
  books: bookReducer,
  filterReducer,
});

export default rootReducer;
