import React from 'react';
import Book from './Book';
import Form from './Form';

const books = [];

const Books = () => (
  <div className="container">
    <div className="books">
      {books.map((book, index) => (
        <Book categorie={`${book.categorie}`} title={`${book.title}`} author={`${book.author}`} index={index} key={`${book.title}`} />
      ))}
    </div>
    <Form />
  </div>
);

export default Books;
