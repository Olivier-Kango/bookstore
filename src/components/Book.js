import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (book) => {
  const {
    title, author, id, category,
  } = book;

  const dispatch = useDispatch();

  return (
    <div key={title} id={id} className="book">
      <p>{category}</p>
      <h4>{title}</h4>
      <p>{author}</p>
      <div className="buttons">
        <button type="button">
          Comments
        </button>
        <button
          type="button"
          onClick={() => dispatch(removeBook({ id }))}
        >
          Remove
        </button>
        <button type="button">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Book;
