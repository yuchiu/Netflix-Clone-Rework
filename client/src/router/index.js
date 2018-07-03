import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, SignIn, NotFound } from "../components/pages";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
