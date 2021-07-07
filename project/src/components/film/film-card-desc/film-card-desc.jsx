import React, {useState} from 'react';

import FilmCardNav from './film-card-nav/film-card-nav';
import FilmCardOverview from './film-card-overview/film-card-overview';
import FilmCardDetails from './film-card-details/film-card-details';
import FilmCardReviews from './film-card-reviews/film-card-reviews';

import filmProp from '../../../props/film';

const DEFAULT_NAV_ITEM = 'Overview';

function FilmCardDesc(props) {

  const {film} = props;
  const [activeNavItem, setActiveNavItem] = useState(DEFAULT_NAV_ITEM);
  const selectNavItem = (label) => setActiveNavItem(label);

  const switchTab = (navItem) => {
    switch(navItem) {
      case 'Overview':
        return <FilmCardOverview film={film} />;
      case 'Details':
        return <FilmCardDetails film={film} />;
      case 'Reviews':
        return <FilmCardReviews />;
      default:
        break;
    }
  };

  return (
    <div className="film-card__desc">
      <FilmCardNav activeItem={activeNavItem} selectItem={selectNavItem} />
      {switchTab(activeNavItem)}
    </div>
  );
}

FilmCardDesc.propTypes = {
  film: filmProp,
};

export default FilmCardDesc;
