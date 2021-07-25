import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import {addFavorite} from '../../store/actions/api-actions';
import {getAuthorizationStatus} from '../../store/reducers/user/selectors';

import {AuthorizationStatus, ApiRoute} from '../../const';

function FilmCardButtons(props) {

  const history = useHistory();
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const {id, isFavorite, isPromo} = props;

  const handleClickButtonPlayer = () => history.push(`${ApiRoute.PLAYER}/${id}`);
  const handleClickButtonMyList = () => dispatch(addFavorite(id, Number(!isFavorite), isPromo));

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button" onClick={handleClickButtonPlayer}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button" onClick={handleClickButtonMyList}>
        {!isFavorite || authorizationStatus !== AuthorizationStatus.AUTH ? (
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
        ) : (
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
        )}
        <span>My list</span>
      </button>
      {authorizationStatus === AuthorizationStatus.AUTH && !isPromo
        ? <Link to={`${ApiRoute.FILMS}/${id}/${ApiRoute.REVIEW}`} className="btn film-card__button">Add review</Link>
        : null}
    </div>
  );
}

FilmCardButtons.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPromo: PropTypes.bool.isRequired,
};

export default FilmCardButtons;
