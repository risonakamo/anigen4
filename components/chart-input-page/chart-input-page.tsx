import React,{useRef,useState} from "react";
import {useHistory} from "react-router-dom";
import cx from "classnames";

import ChartInputBox,{ChartInputBoxRef} from "./components/chart-input-box/chart-input-box";
import SavedBox from "./components/saved-box/saved-box";

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

  // top submit function, retrieve show ids from inputbox and submit
  // using other submit function
  function submitHandler(e:React.MouseEvent|React.KeyboardEvent)
  {
    e.preventDefault();
    submitNavigate(theinputbox.current!.getValue());
  }

  // 2nd level submit, takes show ids, grabs title from title box,
  // performs navigation.
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

  // handle ctrl enter on title input box
  function titleInputKeyHandler(e:React.KeyboardEvent)
  {
    if (e.key=="Enter" && e.ctrlKey)
    {
      e.preventDefault();
      submitHandler(e);
    }
  }

  return <div className="chart-input-page">
    <div className="saved-inputs">
      <SavedBox/>
    </div>
    <div className="chart-input-zone">
      <h4>Chart Title</h4>
      <input type="text" className="title-input" ref={titleInputbox} onKeyDown={titleInputKeyHandler}/>
      <h4>Anilist links</h4>
      <ChartInputBox ref={theinputbox} submitShows={submitNavigate}/>
      <div className="buttons-zone">
        <a className="generate-button" onClick={submitHandler} href="chart">Generate Chart</a>
        <p className={cx("generated-notification invalid-input",{showing:inputInvalid})}>Input Invalid.</p>
      </div>
    </div>
  </div>;
}