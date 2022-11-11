import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    categorie, title, author, index,
  } = props;

  return (
    <div key={title} id={`book-${index}`} className="book">
      <p>{categorie}</p>
      <h4>{title}</h4>
      <p>{author}</p>
      <div className="buttons">
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  index: PropTypes.string.isRequired,
  categorie: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
