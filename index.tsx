import React from "react";
import ReactDOM from "react-dom";

function IndexMain():JSX.Element
{
  return <div></div>;
}

function main()
{
  ReactDOM.render(<IndexMain/>,document.querySelector(".main"));
}

window.onload=main;