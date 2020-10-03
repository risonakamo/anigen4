import React from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router,Switch,Route,Link} from "react-router-dom";

import ChartPage from "./components/chart-page/chart-page";

import "./index.less";

function IndexMain()
{
  return <Router>
    <Switch>
      <Route exact path="/">
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