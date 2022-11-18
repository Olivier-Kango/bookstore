import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducerCategories from './categories/categories';
import BooksSlice from './books/books';

const rootReducer = {
  reducer: {
    books: BooksSlice.reducer,
    categories: reducerCategories,
  },
};

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
