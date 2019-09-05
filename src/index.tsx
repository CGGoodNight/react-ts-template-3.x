import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers";
import { Provider } from 'react-redux';
import { store } from "./store/ConfigureStore";

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
