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

    return () => clearTimeout(timeId);
  }, [active]);

  const redirectToFilm = () => history.push(`/films/${id}`);
  const handleMouseEnter = () => toggleActive(true);
  const handleMouseLeave = () => toggleActive(false);

  const poster = <img src={previewImage} alt={name} width="280" height="175" />;
  const video = <video src={previewVideoLink} width="280" height="175" ref={videoRef} muted></video>;

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      <div className="small-film-card__image" onClick={redirectToFilm} >
        {active ? video : poster}
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
