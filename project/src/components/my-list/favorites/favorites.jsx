import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import filmProp from '../../../props/film';

import {fetchFavorites} from '../../../store/actions/api-actions';

import FilmsList from '../../films-list/films-list';

class Favorites extends Component {
  componentDidMount() {
    this.props.fetchFavorites();
  }

  render() {
    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={this.props.favorites} />
      </section>
    );
  }
}

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(filmProp),
  fetchFavorites: PropTypes.func.isRequired,
};

const mapStateToProps = ({favorites}) => ({
  favorites,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavorites: () => dispatch(fetchFavorites()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
