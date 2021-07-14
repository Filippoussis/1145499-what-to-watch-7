import React, {useRef, useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import filmProp from '../../../props/film';

function SmallFilmCard(props) {

  const {id, name, previewImage, previewVideoLink} = props.film;

  const history = useHistory();
  const videoRef = useRef(null);
  const [active, toggleActive] = useState(null);

  useEffect(() => {
    let timeId = null;

    if (active === true) {
      timeId = setTimeout(() => {
        videoRef.current.play();
      }, 1000);
    }

    if (active === false) {
      videoRef.current.load();
      clearTimeout(timeId);
    }

    return () => clearTimeout(timeId);
  });

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => toggleActive(true)} onMouseLeave={() => toggleActive(false)} >
      <div className="small-film-card__image" onClick={() => history.push(`/films/${id}`)} >
        <video src={previewVideoLink} poster={previewImage} width="280" height="175" ref={videoRef} muted></video>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

SmallFilmCard.propTypes = {
  film: filmProp,
};

export default SmallFilmCard;
