import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counter/counterSlice";

export default function CounterTwo() {
  //useSelector() 훅을 통해서 데이터를 가지고 오자. (state.리듀서이름.value)
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(5));
  };
  return (
    <div>
      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        <button onClick={handleIncrement}>+</button>
        <span>{count}</span>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrementByAmount}>incrementByAmount</button>
      </div>
    </div>
  );
}
