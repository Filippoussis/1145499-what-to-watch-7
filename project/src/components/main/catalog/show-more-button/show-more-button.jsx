import React from 'react';
import {useDispatch} from 'react-redux';

import {showMore} from '../../../../store/actions/actions';

function ShowMoreButton() {

  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch(showMore());
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleClick}>Show more</button>
    </div>
  );
}

export default ShowMoreButton;
