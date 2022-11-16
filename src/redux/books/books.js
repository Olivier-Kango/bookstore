// Define action types for ADD_BOOK and REMOVE_BOOK a book.
const [ADD_BOOK, REMOVE_BOOK] = ['bookStore/books/ADD_BOOK', 'bookStore/books/REMOVE_BOOK'];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const initialState = [
  {
    categorie: 'Action',
    title: 'The Hunger Games',
    author: 'Suzannw Collins',
  },
  {
    categorie: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
  },
];

// Reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
