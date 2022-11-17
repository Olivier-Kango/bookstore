import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

let index = 1;
const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const submition = (e, title, author) => {
    e.preventDefault();
    const newBook = {
      id: index += 1,
      title,
      author,
    };
    dispatch(addBook(newBook));
    document.querySelector('#book-input').value = '';
    document.querySelector('#author-input').value = '';
  };
  return (
    <div className="div-form">
      <h4>ADD NEW BOOK</h4>
      <form className="form">
        <input
          type="text"
          placeholder="Book title"
          id="book-input"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          id="author-input"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={(e) => submition(e, title, author)}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
