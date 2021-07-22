import React, {useState, useEffect, createRef} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import filmProp, {filmDefault} from '../../props/film';

import {getHumanisedPlayerTime} from '../../utils/time';

import {loadPlayer} from '../../store/actions/actions';
import {getPlayer} from '../../store/reducers/films-data/selectors';

function Player(props) {
  const params = useParams();
  const {id} = params;

  useEffect(() => props.loadPlayer(Number(id)));

  const {videoLink, name} = props.player;

  const videoRef = createRef(null);

  const history = useHistory();
  const redirect = () => history.goBack();

  const [playerState, setPlayerState] = useState({
    playing: false,
    timeToEnd: null,
    progress: null,
  });

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

  const {timeToEnd, progress, playing} = playerState;
  const humanisedPlayerTime = getHumanisedPlayerTime(timeToEnd);

  const handleClickButtonPlay = () => videoRef.current.play();

  const handleClickButtonPause = () => {
    setPlayerState({
      ...playerState,
      playing: false,
    });
    videoRef.current.pause();
  };

  const handleFullScreenClick = () => {
    videoRef.current.requestFullscreen();
  };

  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster="img/player-poster.jpg"
        ref={videoRef}
        onTimeUpdate={onTimeUpdate}
        onPlaying={onPlaying}
        autoPlay
      >
      </video>

      <button type="button" className="player__exit" onClick={redirect}>Exit</button>

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

Player.defaultProps = {
  player: filmDefault,
};

Player.propTypes = {
  player: filmProp,
  loadPlayer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  player: getPlayer(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadPlayer: (id) => dispatch(loadPlayer(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
