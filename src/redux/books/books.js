// Action types for adding and removing a book.
const [ADDING, REMOVING] = ['ADDING', 'REMOVING']

const adding = () => {
  return {
    type: ADDING
  }
}

const removing = () => {
  return {
    type: REMOVING
  }
}

// Set the initial state to be an empty array of books.
// Export Action Creators for my actions.
// Write my reducer and export it as default.
    // Define state changes for the actions that I created.
    // In case of unknown action - return the current state.