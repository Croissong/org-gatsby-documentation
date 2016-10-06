import React from 'react';
import { connect } from 'react-redux';



const mapStateToProps = (state) => ({
  counter: state
});

const mapActionCreators = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  };
};

let Counter = ({counter, increment, decrement}) => {

  return (
    <p>
      Clicked: {counter} times
      {' '}
      <button onClick={increment}>
        +
      </button>
      {' '}
      <button onClick={decrement}>
        -
      </button> 
    </p>
  )
}

export default connect(mapStateToProps, mapActionCreators)(Counter);
