import React from "react";
import Layout from "../components/layout";
import { Home, Archer, Dice, Shuffle, Spin } from "../pages";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

export default () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/archer" component={Archer} />
        <Route exact path="/dice" component={Dice} />
        <Route exact path="/shuffle" component={Shuffle} />
        <Route exact path="/spin" component={Spin} />
      </Switch>
    </Layout>
  </Router>
);
