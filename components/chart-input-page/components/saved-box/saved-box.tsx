import React from "react";

import "./saved-box.less";

interface SavedBoxProps
{
  savedData:ChartInput
}

export default function SavedBox(props:SavedBoxProps):JSX.Element
{
  return <div className="saved-box">
    <div className="left">
      <h2>{props.savedData.title}</h2>
      <p>{props.savedData.dateText}</p>
    </div>
    <div className="right">{props.savedData.showIds.length}</div>
  </div>;
}