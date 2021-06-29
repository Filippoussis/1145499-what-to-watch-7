import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import filmProp from '../../props/film';

import {ActionCreator} from '../../store/actions/actions';

import Logo from '../page-header/logo/logo';
import Breadcrumbs from '../page-header/breadcrumbs/breadcrumbs';
import UserBlock from '../page-header/user-block/user-block';
import ReviewForm from './review-form/review-form';

class AddReview extends Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getActiveFilm(Number(id));
  }

  render() {

    const {name, posterImage,backgroundImage} = this.props.active;

    return (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo />
            <Breadcrumbs name={name} />
            <UserBlock />
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
          </div>
        </div>

        <ReviewForm />

      </section>
    );
  }
}

AddReview.propTypes = {
  active: filmProp,
  match: PropTypes.object.isRequired,
  getActiveFilm: PropTypes.func.isRequired,
};

const mapStateToProps = ({active}) => ({
  active,
});

const mapDispatchToProps = (dispatch) => ({
  getActiveFilm: (id) => dispatch(ActionCreator.getActiveFilm(id)),
});

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(AddReview);
