import React from 'react';
import {useHistory} from 'react-router-dom';

import PropTypes from 'prop-types';

function Breadcrumbs({name}) {

  const history = useHistory();
  const redirect = () => history.goBack();

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <span className="breadcrumbs__link" onClick={redirect}>{name}</span>
        </li>
        <li className="breadcrumbs__item">
          <span className="breadcrumbs__link">Add review</span>
        </li>
      </ul>
    </nav>
  );
}

Breadcrumbs.propTypes = {
  name: PropTypes.string,
};

export default Breadcrumbs;
