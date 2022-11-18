// Define action types for ADD_BOOK and REMOVE_BOOK a book.
const [ADD_BOOK, REMOVE_BOOK] = ['ADD_BOOK', 'REMOVE_BOOK'];

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
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzannw Collins',
  },
  {
    category: 'Science Fiction',
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
      return [
        ...state.slice(0, action.payload.id),
        ...state.slice(action.payload.id + 1),
      ];
    default:
      return state;
  }
};

export default bookReducer;
