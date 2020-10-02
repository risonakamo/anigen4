import React from "react";

import ShowBox from "../show-box/show-box";

import "./show-section.less";

interface ShowSectionProps
{
  title:string
  shows:ShowInfo[]
}

export default function ShowSection(props:ShowSectionProps):JSX.Element
{
  return <section className="show-section">
    <div className="title-zone">
      <h1>{props.title}</h1>
      <div className="title-bar">
        <div className="inner-bar"></div>
      </div>
    </div>
    <div className="shows-contain">
      <ShowBox/>
      <ShowBox/>
      <ShowBox/>
    </div>
  </section>;
}