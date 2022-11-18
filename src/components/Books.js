import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div className="container">
      <div className="books">
        {books.map((book, id) => (
          <Book
            category={`${book.category}`}
            title={`${book.title}`}
            author={`${book.author}`}
            id={id}
            key={`${book.title}`}
          />
        ))}
      </div>
      <Form />
    </div>
  );
};

export default Books;
