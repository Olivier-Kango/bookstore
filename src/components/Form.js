import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { addBook } from '../redux/books/books';
import options from './options';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const categoryInputs = () => {
    const newCategoryArray = [];

    if (category.length > 0) {
      category.forEach((item) => newCategoryArray.push(item.value));
      return newCategoryArray.join(', ');
    }

    return 'Not Specified';
  };

  const submition = (e, title, author) => {
    e.preventDefault();
    const newBook = {
      item_id: Math.random(),
      title,
      author,
      category: categoryInputs(),
    };
    const [bookInput, authorInput, categoryInput, alert] = [
      document.querySelector('#book-input'),
      document.querySelector('#author-input'),
      document.querySelector('.css-14el2xx-placeholder'),
      document.querySelector('.alert'),
    ];

    if (bookInput.value === '' && authorInput.value !== '' && category.length > 0) {
      alert.innerText = 'Please Add a Book title';
      bookInput.classList.add('change');
      authorInput.classList.remove('change');
      categoryInput.classList.remove('change');
    } else if (bookInput.value !== '' && authorInput.value === '' && category.length > 0) {
      alert.innerText = 'Please Add an Author';
      bookInput.classList.remove('change');
      authorInput.classList.add('change');
      categoryInput.classList.remove('change');
    } else if (bookInput.value !== '' && authorInput.value !== '' && category.length === 0) {
      alert.innerText = 'Please Select a Category';
      bookInput.classList.remove('change');
      authorInput.classList.remove('change');
      categoryInput.classList.add('change');
    } else if (bookInput.value === '' && authorInput.value === '' && category.length > 0) {
      alert.innerText = 'Please Add a Book title and Author';
      bookInput.classList.add('change');
      authorInput.classList.add('change');
      categoryInput.classList.remove('change');
    } else if (bookInput.value === '' && authorInput.value !== '' && category.length === 0) {
      alert.innerText = 'Please Add a Book title and Select a category';
      bookInput.classList.add('change');
      authorInput.classList.remove('change');
      categoryInput.classList.add('change');
    } else if (bookInput.value !== '' && authorInput.value === '' && category.length === 0) {
      alert.innerText = 'Please Add an Author and Select a category';
      bookInput.classList.remove('change');
      authorInput.classList.add('change');
      categoryInput.classList.add('change');
    } else if (bookInput.value === '' || authorInput.value === '' || category.length === 0) {
      alert.innerText = 'Please Add a Book title, Author and Select a category';
      bookInput.classList.add('change');
      authorInput.classList.add('change');
      categoryInput.classList.add('change');
    } else {
      dispatch(addBook(newBook));
      document.querySelector('.form').reset();
      document.querySelector('.alert').innerText = '';
      bookInput.classList.remove('change');
      authorInput.classList.remove('change');
      categoryInput.classList.remove('change');
    }
  };

  return (
    <div className="div-form">
      <h4>ADD NEW BOOK</h4>
      <p className="alert">{}</p>
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

        <Select
          options={options()}
          id="category-input"
          placeholder="Select category"
          onChange={setCategory}
          className="multi-select"
          Searchable
          Clearable
          isMulti
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
