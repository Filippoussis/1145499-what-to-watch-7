import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../../store/actions/api-actions';
import {getAuthorizationStatus} from '../../../store/reducers/user/selectors';

import {AuthorizationStatus, AppRoute} from '../../../const';

function UserBlock() {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const handleClick = () => dispatch(logout());

  const notAuth = <div><Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link></div>;
  const auth = (
    <>
      <div className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.FAVORITES}><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></Link>
        </div>
      </div>
      <div className="user-block__item">
        <span className="user-block__link" onClick={handleClick}>Sign out</span>
      </div>
    </>
  );

  const content = authorizationStatus !== AuthorizationStatus.AUTH ? notAuth : auth;

  return (
    <div className="user-block">
      {content}
    </div>
  );
}

export default UserBlock;
