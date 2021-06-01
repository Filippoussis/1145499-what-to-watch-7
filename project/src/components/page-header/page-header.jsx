import React from 'react';
import {Link} from 'react-router-dom';

function PageHeader() {
  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link className="user-block__link">Sign out</Link>
        </li>
      </ul>
    </header>
  );
}

export default PageHeader;
