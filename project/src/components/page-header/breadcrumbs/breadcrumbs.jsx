import React from 'react';
import {Link} from 'react-router-dom';

function Breadcrumbs() {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="/films/:1" className="breadcrumbs__link">The Grand Budapest Hotel</Link>
        </li>
        <li className="breadcrumbs__item">
          <span className="breadcrumbs__link">Add review</span>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
