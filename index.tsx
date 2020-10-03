import React from "react";
import ReactDOM from "react-dom";

import ChartPage from "./components/chart-page/chart-page";

import "./index.less";

function main()
{
  ReactDOM.render(<ChartPage/>,document.querySelector(".main"));
}

window.onload=main;