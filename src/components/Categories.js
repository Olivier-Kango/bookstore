import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkingStatus } from '../redux/categories/categories';

let check = false;
const Categories = () => {
  const status = useSelector((state) => state.reducerCategories);
  const dispatch = useDispatch();

  return (
    <div className="categorie">
      <button
        type="button"
        onClick={() => {
          check = !check;
          if (check) {
            return dispatch(checkingStatus('Under construction'));
          }
          return dispatch(checkingStatus(''));
        }}
      >
        Check status
      </button>
      <p>
        {status}
      </p>
    </div>
  );
};

export default Categories;
