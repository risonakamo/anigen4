import React,{useEffect} from "react";
import ReactDOM from "react-dom";

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
  useEffect(()=>{
    (async ()=>{
      console.log(await queryShows(exampleIds));
    })();
  },[]);

  return <>
    <ShowSection/>
    <ShowSection/>
  </>;
}

function main()
{
  ReactDOM.render(<IndexMain/>,document.querySelector(".main"));
}

window.onload=main;