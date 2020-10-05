import React,{useRef,useState} from "react";
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
  // whether the user had entered an invalid input before.
  const [inputInvalid,setInvalidInput]=useState<boolean>(false);

  const theinputbox=useRef<ChartInputBoxRef>(null);
  const routerHistory=useHistory();

  // submit shows and perform page navigation
  function submitHandler(e:React.MouseEvent)
  {
    e.preventDefault();
    submitNavigate(theinputbox.current!.getValue());
  }

  // submit show ids and navigate to chart page
  function submitNavigate(showIds:number[]):void
  {
    if (!showIds.length)
    {
      setInvalidInput(true);
      return;
    }

    routerHistory.push("/chart");
    props.submitedShows(showIds);
  }

  var inputInvalidClass=inputInvalid?"showing":"";

  return <div className="chart-input-zone">
    <input type="text" className="title-input"/>
    <ChartInputBox ref={theinputbox} submitShows={submitNavigate}/>
    <div className="buttons-zone">
      <a className="generate-button" onClick={submitHandler} href="chart">Generate Chart</a>
      <p className={`generated-notification invalid-input ${inputInvalidClass}`}>Input Invalid.</p>
    </div>
  </div>;
}