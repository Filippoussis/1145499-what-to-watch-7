import getGenres from '../utils/genres';

export default class MockApiService {
  constructor(data) {
    this.films = data;
  }

  getPromo() {
    return this.films[0];
  }

  getFilms() {
    return this.films;
  }

  getGenres() {
    return getGenres(this.films);
  }
}
