import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Clients from "./containers/Clients";
import Client from "./containers/Client";

function App() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/clients" exact component={Clients} />
      <Route path="/clients/:id" exact component={Client} />
    </Switch>
  );
}

export default App;
