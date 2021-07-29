import React from 'react';
import {useSelector} from 'react-redux';

import {getSimilar} from '../../../store/reducers/films-data/selectors';
import {getIsUnexpectedError} from '../../../store/reducers/error/selectors';

import FilmsList from '../../films-list/films-list';
import ErrorMessage from '../../error-message/error-message';

function Similar() {

  const similar = useSelector(getSimilar);
  const isError = useSelector(getIsUnexpectedError);

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <FilmsList films={similar} />
    </section>
  );
}

export default Similar;
