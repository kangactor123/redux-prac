// import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./counterSlice";
import { createStore } from "redux";

// function counter(state = 0, action) {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// let store = createStore(counter);

// store.subscribe(() => console.log(store.getState()));

// export default configureStore({
//   reducer: {
//     counter: counterSlice,
//   },
// });
const reducer = (action, state) => {
  if (state === undefined) {
    state = {};
  }
  switch (action.type) {
  }
};

const toDoStore = createStore(reducer);

export default toDoStore;
