import React,{useRef,useImperativeHandle,forwardRef} from "react";

import "./chart-input-box.less";

export interface ChartInputBoxRef
{
  getValue():number[]
}

function ChartInputBox(props:{},ref:React.Ref<ChartInputBoxRef>)
{
  const thetextbox=useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref,()=>({
    getValue
  }));

  // return the value of the textbox, parsed into array of show IDS
  function getValue():number[]
  {
    console.log(thetextbox.current!.value);
    return [];
  }

  return <textarea className="chart-input" ref={thetextbox}></textarea>;
}

export default forwardRef(ChartInputBox);