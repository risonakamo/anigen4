import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

import ShowSection from "./components/show-section/show-section";
import {queryShows} from "./anilist-api/anilist-service";

import "./index.less";

const exampleIds:number[]=[
  112258,
  16742,
  109019,
  108941,
  21683,
  106967,
  104462,
  104937
];

function IndexMain():JSX.Element
{
  // the currently loaded shows grouped by type.
  const [shows,setShows]=useState<GroupedShowsQuery>({});

  useEffect(()=>{
    (async ()=>{
      loadShows(exampleIds);
    })();
  },[]);

  // load array of show ids, re-rendering show sections
  async function loadShows(showIds:number[]):Promise<void>
  {
    setShows(await queryShows(showIds));
  }

  const showSections=_.map(shows,(x:ShowInfo[],i:string)=>{
    return <ShowSection title={i} shows={x} key={i}/>;
  });

  return <>
    {showSections}
  </>;
}

function main()
{
  ReactDOM.render(<IndexMain/>,document.querySelector(".main"));
}

window.onload=main;