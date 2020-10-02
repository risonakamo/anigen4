import React from "react";
import _ from "lodash";

import "./show-box.less";

interface ShowBoxProps
{
  show:ShowInfo
}

export default function ShowBox(props:ShowBoxProps):JSX.Element
{
  const genretags=_.map(props.show.genres,(x:string,i:number)=>{
    return <span key={i}>{x}</span>
  });

  return <div className="show-box">
    <div className="top-contain">
      <span className="season">{props.show.season}</span>
      <span>{props.show.seasonYear}</span>
    </div>

    <img src={props.show.coverImage.large}/>

    <div className="content-contain">
      <h2>{props.show.title.romaji}</h2>
      <div className="tags">
        {genretags}
      </div>
    </div>
  </div>;
}