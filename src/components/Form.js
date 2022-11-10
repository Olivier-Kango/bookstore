import React from 'react';

const Form = () => (
  <div className="div-form">
    <h4>ADD NEW BOOK</h4>
    <form className="form">
      <input type="text" placeholder="Book title" id="book" />
      <input type="text" placeholder="Author" />
      <button type="button">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
