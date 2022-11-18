import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { loadBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  return (
    <div className="container">
      <div className="books">
        {Object.keys(books).map((id) => (
          <Book
            category={books[id][0].category}
            title={books[id][0].title}
            author={books[id][0].author}
            id={id}
            key={`${id}`}
          />
        ))}
      </div>
      <Form />
    </div>
  );
};

export default Books;
