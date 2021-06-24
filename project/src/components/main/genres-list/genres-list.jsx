import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from 'react-redux';

import withApiService from '../../../hooks/withApiService';
import {getGenres} from '../../../actions/genres';
import apiProp from '../../../props/api';

import GenresItem from './genres-item/genres-item';

class GenresList extends Component {
  componentDidMount() {
    const data = this.props.apiService.getGenres();
    this.props.getGenres(data);
  }

  render() {
    const genresItems = this.props.genres.map((genre) => <GenresItem key={genre} genre={genre} />);
    return (
      <ul className="catalog__genres-list">
        {genresItems}
      </ul>
    );
  }
}

GenresList.propTypes = {
  genres: PropTypes.array.isRequired,
  apiService: apiProp,
  getGenres: PropTypes.func.isRequired,
};

const mapStateToProps = ({genres}) => ({
  genres,
});

const mapDispatchToProps = (dispatch) => ({
  getGenres: (genres) => dispatch(getGenres(genres)),
});

export default compose(withApiService, connect(mapStateToProps, mapDispatchToProps))(GenresList);
