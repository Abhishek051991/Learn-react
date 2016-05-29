import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, HashHistory } from "react-router"

import Archieves from "./pages/Archieve";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={HashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archieves(/:article)" component={Archieves}></Route>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>,
  app
);
