import React,{useRef,useImperativeHandle} from "react";

import "./chart-input-box.less";

export default function ChartInputBox()
{
  const thetextbox=useRef<HTMLTextAreaElement>(null);

  // PUBLIC
  // return the value of the textbox, parsed into array of show IDS
  function getValue():void
  {
    console.log(thetextbox.current!.value);
  }

  return <textarea className="chart-input" ref={thetextbox}></textarea>;
}