// Define action types for Checking the status.
const CHECK_STATUS = 'CHECK_STATUS';

export const checkingStatus = (payload) => ({
  type: CHECK_STATUS,
  payload,
});

// Reducer
const reducerCategories = (state = '', action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export default reducerCategories;
