import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../../../store/actions/actions';

function ShowMoreButton(props) {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={props.showMore}>Show more</button>
    </div>
  );
}

ShowMoreButton.propTypes = {
  showMore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  showMore: () => dispatch(ActionCreator.showMore()),
});

export default connect(null, mapDispatchToProps)(ShowMoreButton);
