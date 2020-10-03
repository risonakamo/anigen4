import React,{useRef} from "react";
import {useHistory} from "react-router-dom";

import ChartInputBox from "./components/chart-input-box/chart-input-box";

import "./chart-input-page.less";

export default function ChartInputPage()
{
  const history=useHistory(); //router-dom history manipulator
  const theinputbox=useRef<typeof ChartInputBox>();

  // read chart input and navigate to chart page
  function submitHandler(e:React.MouseEvent)
  {
    e.preventDefault();
    // history.push("/chart");
    // theinputbox.current!.getValue();
  }

  return <div className="chart-input-zone">
    <ChartInputBox/>
    <div className="buttons-zone">
      <a className="generate-button" onClick={submitHandler} href="chart">Generate Chart</a>
    </div>
  </div>;
}