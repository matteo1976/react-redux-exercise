import { combineReducers } from 'redux';
import BookReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  books:BookReducer,
  activeBook:ActiveBook
});

export default rootReducer;
