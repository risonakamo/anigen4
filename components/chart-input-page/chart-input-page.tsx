import React,{useRef} from "react";
import {useHistory} from "react-router-dom";

import ChartInputBox,{ChartInputBoxRef} from "./components/chart-input-box/chart-input-box";

import "./chart-input-page.less";

interface ChartInputPageProps
{
  // called when shows are submitted. includes show ids submitted.
  submitedShows(showIds:number[]):void
}

export default function ChartInputPage(props:ChartInputPageProps)
{
  const theinputbox=useRef<ChartInputBoxRef>(null);
  const routerHistory=useHistory();

  // submit shows and perform page navigation
  function submitHandler(e:React.MouseEvent)
  {
    e.preventDefault();
    routerHistory.push("/chart");
    props.submitedShows(theinputbox.current!.getValue());
  }

  return <div className="chart-input-zone">
    <ChartInputBox ref={theinputbox}/>
    <div className="buttons-zone">
      <a className="generate-button" onClick={submitHandler} href="chart">Generate Chart</a>
    </div>
  </div>;
}