import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const FILMS = [
  {
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    image: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  },
  {
    title: 'Bohemian Rhapsody',
    image: 'img/bohemian-rhapsody.jpg',
  },
  {
    title: 'Macbeth',
    image: 'img/macbeth.jpg',
  },
  {
    title: 'Aviator',
    image: 'img/aviator.jpg',
  },
  {
    title: 'We need to talk about Kevin',
    image: 'img/we-need-to-talk-about-kevin.jpg',
  },
  {
    title: 'What We Do in the Shadows',
    image: 'img/what-we-do-in-the-shadows.jpg',
  },
  {
    title: 'Revenant',
    image: 'img/revenant.jpg',
  },
  {
    title: 'Johnny English',
    image: 'img/johnny-english.jpg',
  },
  {
    title: 'Shutter Island',
    image: 'img/shutter-island.jpg',
  },
  {
    title: 'Pulp Fiction',
    image: 'img/pulp-fiction.jpg',
  },
  {
    title: 'No Country for Old Men',
    image: 'img/no-country-for-old-men.jpg',
  },
  {
    title: 'Snatch',
    image: 'img/snatch.jpg',
  },
  {
    title: 'Moonrise Kingdom',
    image: 'img/moonrise-kingdom.jpg',
  },
  {
    title: 'Seven Years in Tibet',
    image: 'img/seven-years-in-tibet.jpg',
  },
  {
    title: 'Midnight Special',
    image: 'img/midnight-special.jpg',
  },
  {
    title: 'War of the Worlds',
    image: 'img/war-of-the-worlds.jpg',
  },
  {
    title: 'Dardjeeling Limited',
    image: 'img/dardjeeling-limited.jpg',
  },
  {
    title: 'Orlando',
    image: 'img/orlando.jpg',
  },
  {
    title: 'Mindhunter',
    image: 'img/mindhunter.jpg',
  },
  {
    title: 'Midnight Special',
    image: 'img/midnight-special.jpg',
  },
];

function FilmsItem({title, image}) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={image} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" href="film-page.html">{title}</Link>
      </h3>
    </article>
  );
}

const getFilmsItems = () => FILMS.map(({title, image}) => <FilmsItem key={title} title={title} image={image}/>);

function FilmsList() {
  return (
    <div className="catalog__films-list">
      {getFilmsItems()}
    </div>
  );
}

FilmsItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FilmsList;
