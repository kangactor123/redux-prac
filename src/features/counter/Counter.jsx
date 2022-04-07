import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export default function Counter() {
  //useSelector() 훅을 통해서 데이터를 가지고 오자. (state.리듀서이름.value)
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: increment });
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(5));
  };
  const handleFetchIncrement = () => {};
  return (
    <div>
      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleFetchIncrement}>Fetch Increment</button>
        <span>{count}</span>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrementByAmount}>incrementByAmount</button>
      </div>
    </div>
  );
}
