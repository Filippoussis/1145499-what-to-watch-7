import React, {useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import filmProp from '../../props/film';

import {getPlayer} from '../../store/actions/actions';

function Player(props) {

  const {videoLink, name} = props.player;

  const params = useParams();
  const {id} = params;

  useEffect(() => props.getPlayer(Number(id)));

  const history = useHistory();
  const redirect = () => history.goBack();

  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster="img/player-poster.jpg"></video>

      <button type="button" className="player__exit" onClick={redirect}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen">
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

Player.propTypes = {
  player: filmProp,
  getPlayer: PropTypes.func.isRequired,
};

const mapStateToProps = ({player}) => ({
  player,
});

const mapDispatchToProps = (dispatch) => ({
  getPlayer: (id) => dispatch(getPlayer(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
