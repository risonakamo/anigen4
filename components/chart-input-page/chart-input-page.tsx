import React from "react";
import {Link} from "react-router-dom";

import "./chart-input-page.less";

export default function ChartInputPage()
{
  return <div className="chart-input-zone">
    <textarea className="chart-input"></textarea>
    <div className="buttons-zone">
      <Link to="/chart" className="generate-button">Generate Chart</Link>
    </div>
  </div>;
}