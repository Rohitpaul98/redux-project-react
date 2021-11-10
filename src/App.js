import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions';

function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <>
      <h1>Hello Redux</h1>
      <input type="text" value={myState} />
      <button onClick={() => { dispatch(incNumber(5)) }}>+</button>
      <button onClick={() => { dispatch(decNumber(5)) }}>-</button>
    </>
  );
}

export default App;
