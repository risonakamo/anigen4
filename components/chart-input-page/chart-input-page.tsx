import React,{useRef} from "react";

import ChartInputBox,{ChartInputBoxRef} from "./components/chart-input-box/chart-input-box";

import "./chart-input-page.less";

export default function ChartInputPage()
{
  const theinputbox=useRef<ChartInputBoxRef>(null);

  // read chart input and navigate to chart page
  function submitHandler(e:React.MouseEvent)
  {
    e.preventDefault();
    theinputbox.current!.getValue();
  }

  return <div className="chart-input-zone">
    <ChartInputBox ref={theinputbox}/>
    <div className="buttons-zone">
      <a className="generate-button" onClick={submitHandler} href="chart">Generate Chart</a>
    </div>
  </div>;
}