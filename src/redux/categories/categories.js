// Define action types for Checking the status.
const CHECK_STATUS = 'CHECK_STATUS';

export const checkingStatus = () => ({
  type: CHECK_STATUS,
});

// Reducer
const reducerCategories = (state = '', action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default reducerCategories;
