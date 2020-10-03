import React from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router,Switch,Route,Link} from "react-router-dom";

import ChartPage from "./components/chart-page/chart-page";
import ChartInputPage from "./components/chart-input-page/chart-input-page";

import "./index.less";

function IndexMain()
{
  return <Router>
    <Switch>
      <Route exact path="/">
        <ChartInputPage/>
      </Route>
      <Route exact path="/chart">
        <ChartPage/>
      </Route>
    </Switch>
  </Router>;
}

function main()
{
  ReactDOM.render(<IndexMain/>,document.querySelector(".main"));
}

window.onload=main;