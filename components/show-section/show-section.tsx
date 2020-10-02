import React from "react";
import _ from "lodash";

import ShowBox from "../show-box/show-box";

import "./show-section.less";

interface ShowSectionProps
{
  title:string
  shows:ShowInfo[]
}

export default function ShowSection(props:ShowSectionProps):JSX.Element
{
  const showBoxes=_.map(props.shows,(x:ShowInfo,i:number)=>{
    return <ShowBox show={x} key={i}/>;
  });

  return <section className="show-section">
    <div className="title-zone">
      <h1>{props.title}</h1>
      <div className="title-bar">
        <div className="inner-bar"></div>
      </div>
    </div>
    <div className="shows-contain">
      {showBoxes}
    </div>
  </section>;
}