import React from "react";
import _ from "lodash";
import {DateTime} from "luxon";

import "./show-box.less";

interface ShowBoxProps
{
  show:ShowInfo
}

export default function ShowBox(props:ShowBoxProps):JSX.Element
{
  var genretags:JSX.Element[]=_.map(props.show.genres,(x:string,i:number)=>{
    return <span key={i}>{x}</span>
  });

  var startDate:string=createDateText(props.show.startDate.month,props.show.startDate.day);

  return <div className="show-box">
    <div className="top-contain">
      <span className={`season ${props.show.season}`}>{props.show.season}</span>
      <span>{props.show.seasonYear}</span>
      <span className="date-field">{startDate}</span>
    </div>

    <img src={props.show.coverImage.large}/>

    <div className="content-contain">
      <h2><a href={props.show.siteUrl}>{props.show.title.romaji}</a></h2>
      <div className="tags">
        {genretags}
      </div>
    </div>
  </div>;
}

// format show start date
function createDateText(month:number,day:number):string
{
  return DateTime.fromObject({month,day}).toFormat("MMM dd");
}