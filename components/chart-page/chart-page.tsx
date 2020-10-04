import React,{useEffect,useState} from "react";
import _ from "lodash";

import ShowSection from "./components/show-section/show-section";
import {queryShows} from "../../anilist-api/anilist-service";

// these sections will come first in this order
const showSectionOrder:string[]=[
  "TV",
  "TV_SHORT"
];

interface ChartPageProps
{
  showIds:number[] //load in show ids
}

export default function ChartPage(props:ChartPageProps):JSX.Element
{
  // the currently loaded shows grouped by type.
  const [shows,setShows]=useState<GroupedShowsQuery>({});

  // load new shows when input show ids change
  useEffect(()=>{
    console.log("loading new shows");
    loadShows(props.showIds);
  },[props.showIds]);

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