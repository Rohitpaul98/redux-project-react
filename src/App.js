import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber, addItemTodo } from './actions';


function App() {

  const [title, setTitle] = useState("")
  const myState = useSelector((state) => state.changeTheNumber)
  const todoItem = useSelector((state) => state.addTodo)
  const dispatch = useDispatch();


  return (
    <>
      <h1>Hello Redux {myState}</h1>
      <input type="text" value={myState} />
      <h1>Todo</h1>
      {todoItem.map((item, key) => {
        return <h4>{key + 1} {item}</h4>
      })}

      <input type="text" onChange={(e) => { setTitle(e.target.value) }} value={title} />
      <button onClick={() => { dispatch(incNumber(5)) }}>+</button>
      <button onClick={() => { dispatch(decNumber(5)) }}>-</button>
      <button onClick={() => { dispatch(addItemTodo(title)) }}>ADD+</button>
    </>
  );
}

export default App;
