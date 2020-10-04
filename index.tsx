import React,{useState} from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router,Switch,Route,Link} from "react-router-dom";

import ChartPage from "./components/chart-page/chart-page";
import ChartInputPage from "./components/chart-input-page/chart-input-page";

import "./index.less";

function IndexMain()
{
  const [showIds,setShowIds]=useState<number[]>([]);

  // load show ids.
  function loadShowIds(showIds:number[]):void
  {
    setShowIds(showIds);
  }

  return <Router>
    <Switch>
      <Route exact path="/">
        <ChartInputPage submitedShows={loadShowIds}/>
      </Route>
      <Route exact path="/chart">
        <ChartPage showIds={showIds}/>
      </Route>
    </Switch>
  </Router>;
}

function main()
{
  ReactDOM.render(<IndexMain/>,document.querySelector(".main"));
}

window.onload=main;