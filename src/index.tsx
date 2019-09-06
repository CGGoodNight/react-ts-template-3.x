import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers";
import { Provider } from 'react-redux';
import LocaleProvider from "./containers/LocaleProvider";
import store from "./store/ConfigureStore";

//挂载 Mock
import './mock/clientVersion';

ReactDOM.render(
  <Provider store={ store }>
    <LocaleProvider>
      <AppRouter />
    </LocaleProvider>
  </Provider>,
  document.getElementById("root")
);
