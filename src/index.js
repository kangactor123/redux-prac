import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import * as ReactDOMCleint from "react-dom/client";

const container = document.getElementById("root");
const root = ReactDOMCleint.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
