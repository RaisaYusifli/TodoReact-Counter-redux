// import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment,decrement,incrementByX} from './store/counterSlice';

//action={type,payload}
// const reducer = (state, action) => {
//   if (action.type === "increment") {
//     return { count: state.count + 1 };
//   } else if (action.type === "decrement") {
//     return { count: state.count - 1 };
//   } else if (action.type === "incrementBy10") {
//     return { count: state.count + 10 };
//   } else if (action.type === "incrementByX") {
//     return { count: state.count + action.payload };
//   }
//   return state;
// };

export function Counter() {
  // const [count,setCount]=useState(0);
  // const [state, dispatch] = useReducer(reducer, { count: 0 });

  const dispatch = useDispatch();
  const count=useSelector((state)=>state.counter);
  return (
    <>
      {/* <button onClick={()=>setCount((prevState)=>(prevState-1))}>-</button>
        <span>{count}</span>
        <button onClick={()=>setCount((prevState)=>prevState+1)}>+</button> */}
      {/* 
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "incrementBy10" })}>10+</button>
      <button onClick={() => dispatch({ type: "incrementByX", payload: 20 })}>
        20+
      </button>
      <button onClick={() => dispatch({ type: "incrementByX", payload: 30 })}>
        30+
      </button> */}
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByX(20))}>
        20+
      </button>
      <br />
    </>
  );
}
