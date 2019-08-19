import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incrementCount, decrementCount, resetCount } from "../redux/actions";

function Counter(props) {
  const increment = () => {
    const { incrementCount } = props;
    incrementCount();
  };

  const decrement = () => {
    const { decrementCount } = props;
    decrementCount();
  };

  const reset = () => {
    const { resetCount } = props;
    resetCount();
  };

  const { count } = props;
  
  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function mapStateToProps(state) {
  const { count } = state;
  return { count };
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ incrementCount, decrementCount, resetCount }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
