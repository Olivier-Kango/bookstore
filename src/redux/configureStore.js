import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import booksReducer from './books/books';
import reducerCategories from './categories/categories';

const reducer = combineReducers({
  auth: booksReducer,
  categorie: reducerCategories,
});

const store = configureStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
