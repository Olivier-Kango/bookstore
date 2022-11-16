import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkingStatus } from '../redux/categories/categories';

function Categories() {
  const status = useSelector((state) => state.reducerCategories);
  const dispatch = useDispatch();

  return (
    <div className="categorie">
      <button
        type="button"
        onClick={() => dispatch(checkingStatus(status))}
      >
        Check status
      </button>
      <p>
        {status}
      </p>
    </div>
  );
}

export default Categories;
