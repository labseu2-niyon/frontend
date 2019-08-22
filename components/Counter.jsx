import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';

function Counter({
  incrementCount, decrementCount, resetCount, count,
}) {
  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button type="button" onClick={incrementCount}>+1</button>
      <button type="button" onClick={decrementCount}>-1</button>
      <button type="button" onClick={resetCount}>Reset</button>
    </div>
  );
}

function mapStateToProps(state) {
  const { count } = state;
  return { count };
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

Counter.propTypes = {
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
  resetCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
