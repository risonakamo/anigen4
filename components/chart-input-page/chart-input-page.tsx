import React,{useRef,useState} from "react";
import {useHistory} from "react-router-dom";

import ChartInputBox,{ChartInputBoxRef} from "./components/chart-input-box/chart-input-box";

import "./chart-input-page.less";

interface ChartInputPageProps
{
  // called when shows are submitted. includes show ids submitted and the
  // user provided title
  submitedShows(showIds:number[],chartTitle:string):void
}

export default function ChartInputPage(props:ChartInputPageProps)
{
  // whether the user had entered an invalid input before.
  const [inputInvalid,setInvalidInput]=useState<boolean>(false);

  const theinputbox=useRef<ChartInputBoxRef>(null);
  const titleInputbox=useRef<HTMLInputElement>(null);
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
    props.submitedShows(showIds,titleInputbox.current!.value);
  }

  var inputInvalidClass=inputInvalid?"showing":"";

  return <div className="chart-input-zone">
    <h4>Chart Title</h4>
    <input type="text" className="title-input" ref={titleInputbox}/>
    <h4>Anilist links</h4>
    <ChartInputBox ref={theinputbox} submitShows={submitNavigate}/>
    <div className="buttons-zone">
      <a className="generate-button" onClick={submitHandler} href="chart">Generate Chart</a>
      <p className={`generated-notification invalid-input ${inputInvalidClass}`}>Input Invalid.</p>
    </div>
  </div>;
}