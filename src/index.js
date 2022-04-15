import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createRoot } from 'react-dom/client'

import App from "./App.js";

const appRouting = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
);

const container = document.getElementById("root");
const root = createRoot(container); 

root.render(<App />)