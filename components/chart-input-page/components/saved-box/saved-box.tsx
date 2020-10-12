import React from "react";

import "./saved-box.less";

interface SavedBoxProps
{
  savedData:ChartInput
  onClick(savedData:ChartInput):void
}

export default function SavedBox(props:SavedBoxProps):JSX.Element
{
  // box click. calls props click handler, providing the saved data of the box
  function clickHandler(e:React.MouseEvent):void
  {
    e.preventDefault();
    props.onClick(props.savedData);
  }

  return <a className="saved-box" href="" onClick={clickHandler}>
    <div className="left">
      <h2>{props.savedData.title}</h2>
      <p>{props.savedData.dateText}</p>
    </div>
    <div className="right">{props.savedData.showIds.length}</div>
  </a>;
}