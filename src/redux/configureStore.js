import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import reducerCategories from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  reducerCategories,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
