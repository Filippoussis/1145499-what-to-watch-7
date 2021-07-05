import React from 'react';
import {withRouter} from 'react-router-dom';

import PropTypes from 'prop-types';

function Breadcrumbs({name, history}) {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <span className="breadcrumbs__link" onClick={() => history.goBack()}>{name}</span>
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
  history: PropTypes.object.isRequired,
};

export default withRouter(Breadcrumbs);
