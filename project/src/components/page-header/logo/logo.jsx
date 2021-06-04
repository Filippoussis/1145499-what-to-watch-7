import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Logo({footer}) {

  const classNameMod = footer ? 'logo__link--light' : '';

  return (
    <div className="logo">
      <Link to="/" className={`logo__link ${classNameMod}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

Logo.propTypes = {
  footer: PropTypes.bool,
};

export default Logo;
