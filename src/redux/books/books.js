import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import BooksApi from '../../api/BooksApi';

const [ADD_BOOK, REMOVE_BOOK, LOAD_BOOKS] = ['ADD_BOOK', 'REMOVE_BOOK', 'LOAD_BOOKS'];

// LOAD
export const loadBooks = createAsyncThunk(LOAD_BOOKS, async () => {
  try {
    const response = await BooksApi.getBooksApi();
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

// ADD
export const addBook = createAsyncThunk(ADD_BOOK, async (nul, payload) => {
  try {
    await BooksApi.postBookApi(nul, payload);
    payload.dispatch(loadBooks());
  } catch (error) {
    throw new Error(error);
  }
});

// DELETE
export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id, thunkAPI) => {
  try {
    await BooksApi.deleteBookApi(id);
    thunkAPI.dispatch(loadBooks());
  } catch (error) {
    throw new Error(error);
  }
});

// BOOK STORE
const BooksSlice = createSlice({
  name: 'bookstore',
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(loadBooks.fulfilled, (state, action) => action.payload);
  },
});

export default BooksSlice;
