import React from "react";

import "./show-box.less";

export default function ShowBox():JSX.Element
{
  return <div className="show-box">
    <div className="top-contain">
      <span className="season">Winter</span>
      <span>2020</span>
    </div>

    <img src="../ref/testimage.jpg"/>

    <div className="content-contain">
      <h1>Houkago Teibou Nisshi</h1>
      <div className="tags">
        <span>Slice of Life</span>
        <span>Comedy</span>
      </div>
    </div>
  </div>;
}