import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SaveTheDay from "./pages/SaveTheDay";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";

const Routes = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/save-the-day" component={SaveTheDay} />
      <PrivateRoute exact path="/admin" component={Admin} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Layout>
);

export default Routes;
