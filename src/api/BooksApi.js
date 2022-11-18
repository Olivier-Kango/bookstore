import http from './http-common';

const getBooksApi = () => http.get();
const postBookApi = (data) => http.post('', data);
const deleteBookApi = (id) => http.delete(`${id}`);

const BooksApi = {
  getBooksApi,
  postBookApi,
  deleteBookApi,
};

export default BooksApi;
