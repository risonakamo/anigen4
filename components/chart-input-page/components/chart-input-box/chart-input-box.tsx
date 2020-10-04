import React,{useRef,useImperativeHandle,forwardRef} from "react";
import _ from "lodash";

import "./chart-input-box.less";

interface ChartInputBoxProps
{
  // called when this box submitting shows. includes the show ids.
  submitShows(showIds:number[]):void
}

export interface ChartInputBoxRef
{
  getValue():number[]
}

export default forwardRef(ChartInputBox);
function ChartInputBox(props:ChartInputBoxProps,ref:React.Ref<ChartInputBoxRef>)
{
  const thetextbox=useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref,()=>({
    getValue
  }));

  // return the value of the textbox, parsed into array of show IDS
  function getValue():number[]
  {
    return parseShowIds(thetextbox.current!.value.split("\n"));
  }

  // text box key down handler
  function keyHandler(e:React.KeyboardEvent):void
  {
    if (e.key=="Enter" && e.ctrlKey)
    {
      e.preventDefault();
      props.submitShows(getValue());
    }
  }

  return <textarea className="chart-input" ref={thetextbox} onKeyDown={keyHandler}></textarea>;
}

// convert array of show links to show ids. if a string is not valid,
// becomes excluded. removes duplicates.
function parseShowIds(showLinks:string[]):number[]
{
  return _.uniq(_.filter(_.map(showLinks,(x:string)=>{
    // attempt to extract id number from anilist url
    // [1]: id
    var match:RegExpMatchArray|null=x.match(/anime\/(\d+)/);

    if (!match || match.length!=2)
    {
      return null;
    }

    return parseInt(match[1]);
  })) as number[]);
}