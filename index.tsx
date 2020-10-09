import React,{useState} from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router,Switch,Route,Link} from "react-router-dom";
import {DateTime} from "luxon";

import ChartPage from "./components/chart-page/chart-page";
import ChartInputPage from "./components/chart-input-page/chart-input-page";

import "./index.less";

function IndexMain()
{
  // current show ids
  const [showIds,setShowIds]=useState<number[]>([]);

  // current chart title
  const [chartTitle,setChartTitle]=useState<string>("");

  // current chart date
  const [chartDate,setChartDate]=useState<string>("");

  // load show ids.
  function loadShowIds(showIds:number[],newChartTitle:string):void
  {
    setShowIds(showIds);

    var newChartDate:string=DateTime.local().toFormat("yyyy/MM/dd");

    if (!newChartTitle)
    {
      newChartTitle=newChartDate;
      newChartDate="";
    }

    setChartTitle(newChartTitle);
    setChartDate(newChartDate);
    document.title=`${newChartTitle} - Anigen 4`;
  }

  return <Router>
    <Switch>
      <Route exact path="/">
        <ChartInputPage submitedShows={loadShowIds}/>
      </Route>
      <Route exact path="/chart">
        <ChartPage showIds={showIds} title={chartTitle} date={chartDate}/>
      </Route>
    </Switch>
  </Router>;
}

function main()
{
  ReactDOM.render(<IndexMain/>,document.querySelector(".main"));
}

window.onload=main;