import React from "react";

import ShowBox from "../show-box/show-box";

import "./show-section.less";

export default function ShowSection():JSX.Element
{
  return <section className="show-section">
    <div className="title-zone">
      <h1>TV</h1>
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