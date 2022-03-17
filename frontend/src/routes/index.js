import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Async from "react-code-splitting";
import layout from "./layout";
import ProtectedRoute from "./ProtectedRoute";

const home = (props) => (
  <Async load={import("../pages/home")} componentProps={props} />
);
const login = (props) => (
  <Async load={import("../pages/login")} componentProps={props} />
);

class Routes extends Component {
  render() {
    return (
      <Switch>
        <ProtectedRoute path="/home" component={layout(home)} />
        <RouteLogin path="/login" component={login} />
      </Switch>
    );
  }
}

const RouteLogin = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(Routes);
