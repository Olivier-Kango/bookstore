import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import reducerCategories from './categories/categories';

const reducer = combineReducers({
  auth: booksReducer,
  categorie: reducerCategories,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
