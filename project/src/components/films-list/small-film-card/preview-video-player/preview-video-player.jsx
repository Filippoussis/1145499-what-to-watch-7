import React from 'react';
import PropTypes from 'prop-types';

function PreviewVideoPlayer({previewVideoLink}) {
  return (
    <video src={previewVideoLink} width="280" height="175" autoPlay muted></video>
  );
}

PreviewVideoPlayer.propTypes = {
  previewVideoLink: PropTypes.string.isRequired,
};

export default PreviewVideoPlayer;
