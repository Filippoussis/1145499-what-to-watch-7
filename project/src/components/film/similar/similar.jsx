import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import filmProp from '../../../props/film';

import {fetchSimilar} from '../../../store/actions/api-actions';

import FilmsList from '../../films-list/films-list';

const SIMILAR_FILMS_COUNT = 4;

class Similar extends Component {
  componentDidMount() {
    this.props.fetchSimilar(this.props.filmId);
  }

  render() {
    return (
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <FilmsList films={this.props.similar} />
      </section>
    );
  }
}

Similar.propTypes = {
  filmId: PropTypes.number.isRequired,
  similar: PropTypes.arrayOf(filmProp),
  fetchSimilar: PropTypes.func.isRequired,
};

const mapStateToProps = ({similar}) => ({
  similar: similar.slice(0, SIMILAR_FILMS_COUNT),
});

const mapDispatchToProps = (dispatch) => ({
  fetchSimilar: (id) => dispatch(fetchSimilar(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Similar);
