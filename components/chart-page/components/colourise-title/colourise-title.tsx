import React from "react";

interface ColouriseTitleProps
{
  title:string
}

export default function ColouriseTitle(props:ColouriseTitleProps):JSX.Element
{
  return <h1>{props.title}</h1>;
}