import React from "react";
import {Link} from "react-router-dom";

import ChartInputBox from "./components/chart-input-box/chart-input-box";

import "./chart-input-page.less";

export default function ChartInputPage()
{
  return <div className="chart-input-zone">
    <ChartInputBox/>
    <div className="buttons-zone">
      <Link to="/chart" className="generate-button">Generate Chart</Link>
    </div>
  </div>;
}