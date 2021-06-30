import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../../store/actions/api-actions';
import {AuthorizationStatus} from '../../../const';

function UserBlock(props) {

  const {authorizationStatus, userLogout} = props;

  const notAuth = <div><Link to="/login" className="user-block__link">Sign in</Link></div>;
  const auth = (
    <>
      <div className="user-block__item">
        <div className="user-block__avatar">
          <Link to="/mylist"><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></Link>
        </div>
      </div>
      <div className="user-block__item">
        <span className="user-block__link" onClick={() => userLogout()}>Sign out</span>
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

UserBlock.propTypes = {
  userLogout: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({authorizationStatus}) => ({
  authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => dispatch(logout()),
});

export {UserBlock};
export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
