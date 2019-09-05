import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
// import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from "../features/Home";
import NotFound from "../features/NotFound";

export default class AppRouter extends React.Component {
  public render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={ Home } />
          {/* 404 */}
          <Route path="/notFound" component={NotFound} />
          <Redirect to="/notFound" />
        </Switch>
      </BrowserRouter>
    )
  }
}