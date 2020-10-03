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

// these sections will come first in this order
const showSectionOrder:string[]=[
  "TV",
  "TV_SHORT"
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

  // create show sections from the current shows
  function generateShowSections():JSX.Element[]
  {
    var orderedShowSections:JSX.Element[]=_.filter(_.map(showSectionOrder,(x:string)=>{
      if (x in shows)
      {
        return <ShowSection title={x} shows={shows[x]} key={x}/>;
      }
    })) as JSX.Element[];

    var remainingSectionNames:string[]=_.difference(Object.keys(shows),showSectionOrder);
    var otherShowSections:JSX.Element[]=_.map(remainingSectionNames,(x:string)=>{
      return <ShowSection title={x} shows={shows[x]} key={x}/>;
    });

    return [
      ...orderedShowSections,
      ...otherShowSections
    ];
  }

  return <>
    {generateShowSections()}
  </>;
}

function main()
{
  ReactDOM.render(<IndexMain/>,document.querySelector(".main"));
}

window.onload=main;