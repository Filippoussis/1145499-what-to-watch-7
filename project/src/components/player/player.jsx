import React, {useState, useEffect, useCallback, useRef} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {getHumanisedPlayerTime} from '../../utils/time';

import {fetchFilm} from '../../store/actions/api-actions';
import {getFilmData, getLoadedFilmStatus} from '../../store/reducers/films-data/selectors';

import Spinner from '../spinner/spinner';

function Player() {
  const videoRef = useRef(null);
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const film = useSelector(getFilmData);
  const loading = useSelector(getLoadedFilmStatus);

  const redirectToBack = () => history.goBack();

  const request = useCallback(() => dispatch(fetchFilm(params.id)), [dispatch, params.id]);
  useEffect(() => request(), [request]);

  const {videoLink, name} = film;

  const [playerState, setPlayerState] = useState({
    playing: false,
    timeToEnd: 0,
    progress: 0,
  });

  const {timeToEnd, progress, playing} = playerState;
  const humanisedPlayerTime = getHumanisedPlayerTime(timeToEnd);

  const onTimeUpdate = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;

    setPlayerState({
      ...playerState,
      timeToEnd: duration - currentTime,
      progress: currentTime*100/duration,
    });
  };

  const onPlaying = () => setPlayerState({
    ...playerState,
    playing: true,
  });

  const handleFullScreenClick = () => videoRef.current.requestFullscreen();
  const handleClickButtonPlay = () => videoRef.current.play();

  const handleClickButtonPause = () => {
    setPlayerState({
      ...playerState,
      playing: false,
    });
    videoRef.current.pause();
  };

  if (!loading) {
    return <Spinner />;
  }

  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster="img/player-poster.jpg"
        ref={videoRef}
        onTimeUpdate={onTimeUpdate}
        onPlaying={onPlaying}
        autoPlay
      >
      </video>

      <button type="button" className="player__exit" onClick={redirectToBack}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="0" max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{humanisedPlayerTime}</div>
        </div>

        <div className="player__controls-row">
          {!playing ? (
            <button type="button" className="player__play" onClick={handleClickButtonPlay}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          ) : (
            <button type="button" className="player__play" onClick={handleClickButtonPause}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          )}
          <div className="player__name">{name}</div>
          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
