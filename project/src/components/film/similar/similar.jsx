import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import filmProp from '../../../props/film';

import FilmsList from '../../films-list/films-list';

const SIMILAR_FILMS_COUNT = 4;

function Similar(props) {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <FilmsList films={props.similar} />
    </section>
  );
}

Similar.propTypes = {
  similar: PropTypes.arrayOf(filmProp),
};

const mapStateToProps = ({DATA}) => ({
  similar: DATA.similar.slice(0, SIMILAR_FILMS_COUNT),
});

export default connect(mapStateToProps, null)(Similar);
