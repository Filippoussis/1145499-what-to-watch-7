import React from 'react';
import SmallFilmCard from './small-film-card/small-film-card';

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
];

function FilmsList() {

  const filmsItems = FILMS.map(({title, image}) => <SmallFilmCard key={title} title={title} image={image}/>);

  return (
    <div className="catalog__films-list">
      {filmsItems}
    </div>
  );
}

export default FilmsList;
