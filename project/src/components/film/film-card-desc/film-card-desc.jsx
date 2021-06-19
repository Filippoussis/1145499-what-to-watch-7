import React, { Component } from 'react';

import FilmCardNav from './film-card-nav/film-card-nav';
import FilmCardOverview from './film-card-overview/film-card-overview';
import FilmCardDetails from './film-card-details/film-card-details';
import FilmCardReviews from './film-card-reviews/film-card-reviews';

import filmProp from '../../../props/film';

const DEFAULT_NAV_ITEM = 'Overview';

export default class FilmCardDesc extends Component {
  constructor() {
    super();

    this.state = {
      activeNavItem: DEFAULT_NAV_ITEM,
    };

    this.selectNavItem = this.selectNavItem.bind(this);
  }

  selectNavItem(label) {
    this.setState({
      activeNavItem: label,
    });
  }

  switchTab(activeNavItem) {
    const {film} = this.props;

    switch(activeNavItem) {
      case 'Overview':
        return <FilmCardOverview film={film} />;
      case 'Details':
        return <FilmCardDetails film={film} />;
      case 'Reviews':
        return <FilmCardReviews />;
      default:
        break;
    }
  }

  render() {

    const {activeNavItem} = this.state;

    return (
      <div className="film-card__desc">
        <FilmCardNav activeItem={activeNavItem} selectItem={this.selectNavItem} />
        {this.switchTab(activeNavItem)}
      </div>
    );
  }
}

FilmCardDesc.propTypes = {
  film: filmProp,
};
