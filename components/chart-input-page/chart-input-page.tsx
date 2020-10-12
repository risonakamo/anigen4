import React,{useRef,useState} from "react";
import {useHistory} from "react-router-dom";
import cx from "classnames";
import _ from "lodash";

import ChartInputBox,{ChartInputBoxRef} from "./components/chart-input-box/chart-input-box";
import SavedBox from "./components/saved-box/saved-box";
import {getSavedInputs} from "../../database/windowstorage";

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
  // performs navigation. if given a title, uses that title.
  function submitNavigate(showIds:number[],title?:string):void
  {
    if (!showIds.length)
    {
      setInvalidInput(true);
      return;
    }

    if (!title)
    {
      title=titleInputbox.current!.value;
    }

    routerHistory.push("/chart");
    props.submitedShows(showIds,title);
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

  // submitter for provided saved data.
  function submitSavedInput(savedData:ChartInput):void
  {
    submitNavigate(savedData.showIds,savedData.title);
  }

  // create the saved inputs by pulling from storage
  function generateSavedInputs():JSX.Element[]
  {
    return _.map(getSavedInputs(),(x:ChartInput,i:number)=>{
      return <SavedBox savedData={x} key={i} onClick={submitSavedInput}/>;
    });
  }

  return <div className="chart-input-page">
    <div className="saved-inputs">
      {generateSavedInputs()}
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