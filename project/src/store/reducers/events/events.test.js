import {events} from './events';
import {ActionType} from '../../actions/actions';
import {DEFAULT_GENRE, DISPLAYED_FILMS_COUNT_STEP} from '../../../const';

describe('Reducer: events', () => {
  it('without additional parameters should return initial state', () => {
    expect(events(undefined, {}))
      .toEqual({
        currentGenre: DEFAULT_GENRE,
        displayedFilmsCount: DISPLAYED_FILMS_COUNT_STEP,
        showMoreCountStep: DISPLAYED_FILMS_COUNT_STEP,
      });
  });

  it('setGenre', () => {
    const state = {
      currentGenre: 'All genres',
      displayedFilmsCount: 8,
      showMoreCountStep: 8,
    };

    const setGenreAction = {
      type: ActionType.SET_GENRE,
      payload: 'Drama',
    };

    expect(events(state, setGenreAction))
      .toEqual({
        ...state,
        currentGenre: 'Drama',
      });
  });

  it('showMore', () => {
    const state = {
      currentGenre: 'All genres',
      displayedFilmsCount: 8,
      showMoreCountStep: 8,
    };

    const showMoreAction = {
      type: ActionType.SHOW_MORE,
    };

    expect(events(state, showMoreAction))
      .toEqual({
        ...state,
        displayedFilmsCount: 16,
      });
  });
});
