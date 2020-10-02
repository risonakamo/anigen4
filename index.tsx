import React,{useEffect} from "react";
import ReactDOM from "react-dom";

import ShowSection from "./components/show-section/show-section";
import {queryShow} from "./anilist-api/anilist-service";

import "./index.less";

function IndexMain():JSX.Element
{
  useEffect(()=>{
    (async ()=>{
      console.log(await queryShow(106967));
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