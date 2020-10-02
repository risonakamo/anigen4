import React from "react";
import ReactDOM from "react-dom";

import ShowSection from "./components/show-section/show-section";

import "./index.less";

function IndexMain():JSX.Element
{
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