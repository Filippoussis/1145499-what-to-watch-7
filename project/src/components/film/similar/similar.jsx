import React from 'react';
import {useSelector} from 'react-redux';

import {getSimilar} from '../../../store/reducers/films-data/selectors';

import FilmsList from '../../films-list/films-list';

function Similar() {

  const similar = useSelector(getSimilar);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <FilmsList films={similar} />
    </section>
  );
}

export default Similar;
