import React from "react";
import _ from "lodash";

import "./colourise-title.less";

const _extractSeason:RegExp=/(.*?)(spring|summer|fall|winter)(.*)/i;
const _seasonMatch:RegExp=/spring|summer|fall|winter/i;

interface ColouriseTitleProps
{
  title:string
}

export default function ColouriseTitle(props:ColouriseTitleProps):JSX.Element
{
  const splitTitle:string[]=splitRegSegment(props.title,_extractSeason);
  const theTitle:(JSX.Element|string)[]=_.map(splitTitle,wrapSeasonString);

  return <h1 className="colourised-title">{theTitle}</h1>;
}

/* given a string, splits the string using a target regex. the string will be split
 into pieces where matches to the regex become pieces of the string. the given regex
 MUST split the string into THREE groups, where the middle is the target value.
 ex: split on "ab"
 hello there ab areab you -> [hello there ,ab, are,ab, you]*/
function splitRegSegment(input:string,targetReg:RegExp):string[]
{
  var res:string[]=[];
  var currString:string=input;

  while (true)
  {
    var match:RegExpMatchArray|null=currString.match(targetReg);

    if (!match || match.length!=4)
    {
      res.push(currString);
      break;
    }

    res.push(match[1],match[2]);
    currString=match[3];
  }

  return _.reject(res,(x:string)=>{
    return x.length==0;
  });
}

// if the input string is a season, wrap it in a span with the season as the class,
// otherwise just returns the string
function wrapSeasonString(input:string,key:number):JSX.Element|string
{
  if (input.search(_seasonMatch)>=0)
  {
    return <span className={input.toUpperCase()} key={key}>{input}</span>;
  }

  return input;
}