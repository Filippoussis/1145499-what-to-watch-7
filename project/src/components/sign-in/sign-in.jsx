import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../store/actions/api-actions';

import Logo from '../page-header/logo/logo';
import PageFooter from '../page-footer/page-footer';

function SignIn() {
  const loginRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const [isValidPassword, setValidPassword] = useState(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const email= loginRef.current.value;
    const password = passwordRef.current.value;

    if (password.trim() === '') {
      setValidPassword(false);
      return;
    }

    dispatch(login({email, password}));
  };

  const invalidPasswordMessage = (
    <div className="sign-in__message">
      <p>The password can not consist of one spaces only</p>
    </div>
  );

  const errorClassModPassword = isValidPassword === false ? 'sign-in__field--error' : '';

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          {isValidPassword === false ? invalidPasswordMessage : null}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                data-testid="email"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={`sign-in__field ${errorClassModPassword}`}>
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                data-testid="password"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <PageFooter />
    </div>
  );
}

export default SignIn;
