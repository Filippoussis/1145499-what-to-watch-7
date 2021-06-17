import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import PreviewVideoPlayer from './preview-video-player/preview-video-player';

export default class SmallFilmCard extends Component {
  constructor() {
    super();

    this.state = {
      active: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.timer = setTimeout(() => {
      this.setState({
        active: true,
      });
    }, 1000);
  }

  handleMouseLeave() {
    this.setState({
      active: false,
    });
  }

  componentDidUpdate() {
    clearTimeout(this.timer);
  }

  render() {

    const {id, name, previewImage, previewVideoLink} = this.props;
    const {active} = this.state;

    const previewPoster = (
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
    );

    return (
      <article className="small-film-card catalog__films-card" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >
        {active ? <PreviewVideoPlayer previewVideoLink={previewVideoLink} /> : previewPoster}
        <h3 className="small-film-card__title">
          <Link to={`/films/${id}`} className="small-film-card__link">{name}</Link>
        </h3>
      </article>
    );
  }
}

SmallFilmCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
};
