import React from "react";
import _ from "lodash";

const _extractSeason:RegExp=/(.*?)(spring|summer|fall|winter)(.*)/i;

interface ColouriseTitleProps
{
  title:string
}

export default function ColouriseTitle(props:ColouriseTitleProps):JSX.Element
{
  // splitRegSegment(props.title,_extractSeason)
  return <h1><span>Winter</span> 2020</h1>;
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