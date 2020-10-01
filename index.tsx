import React from "react";
import ReactDOM from "react-dom";

import ShowBox from "./components/show-box/show-box";

import "./index.less";

function IndexMain():JSX.Element
{
  return <>
    <ShowBox/>
  </>;
}

function main()
{
  ReactDOM.render(<IndexMain/>,document.querySelector(".main"));
}

window.onload=main;