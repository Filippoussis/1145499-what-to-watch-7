import React from 'react';
import {Link} from 'react-router-dom';

function UserBlock() {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to="/mylist"><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link to="#" className="user-block__link">Sign out</Link>
      </li>
    </ul>
  );
}

export default UserBlock;
