import axios from 'axios';

// GET
const getBooksFromApi = async () => {
  try {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KSJLCOyFYvGsjiq58MWa/books/');
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// POST
axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KSJLCOyFYvGsjiq58MWa/books/', {
  item_id: 3,
  title: 'Bonjour SaintEsprit',
  author: 'Benny Hinn',
  category: 'Gospel',
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// DELETE
axios.delete('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KSJLCOyFYvGsjiq58MWa/books/2')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

export default getBooksFromApi;
