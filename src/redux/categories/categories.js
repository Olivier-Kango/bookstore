// Define action types for Checking the status.
const CHECK_STATUS = 'bookStore/books/CHECK_STATUS';

export const checkingStatus = (playload) => ({
  type: CHECK_STATUS,
});

const initialState = [];

// Reducer
  const reducerCategories = (state = initialState, action) => {
    switch(action.type) {
      case CHECK_STATUS:
        return 'Under construction';
      default:
        return state;
    }
  }
  
  export default reducerCategories;