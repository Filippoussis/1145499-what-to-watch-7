import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default class SmallFilmCard extends Component {
  constructor() {
    super();

    this.video = React.createRef();

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.timer = setTimeout(() => {
      this.video.current.play();
    }, 1000);
  }

  handleMouseLeave() {
    this.video.current.load();
    clearTimeout(this.timer);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {

    const {id, name, previewImage, previewVideoLink} = this.props;

    return (
      <article className="small-film-card catalog__films-card" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >
        <div className="small-film-card__image">
          <video src={previewVideoLink} poster={previewImage} width="280" height="175" ref={this.video} muted></video>
        </div>
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
