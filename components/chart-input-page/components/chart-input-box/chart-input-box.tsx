import React,{useRef,useImperativeHandle,forwardRef} from "react";
import _ from "lodash";

import "./chart-input-box.less";

const exampleInput:string=`
https://anilist.co/anime/104051/Magia-Record-Mahou-Shoujo-MadokaMagica-Gaiden/
https://anilist.co/anime/109298/Eizouken-ni-wa-Te-wo-Dasu-na/
https://anilist.co/anime/114417/Hentatsu/
https://anilist.co/anime/104461/Heya-Camp/
https://anilist.co/anime/110090/Yatogamechan-Kansatsu-Nikki-2-Satsume/
https://anilist.co/anime/101634/BanG-Dream-3rd-Season/
https://anilist.co/anime/113397/Natsunagu/
https://anilist.co/anime/106479/Itai-no-wa-Iya-nanode-BogyoRyoku-ni-Kyokufuri-Shitai-to-Omoimasu/
https://anilist.co/anime/106863/Nekopara/
https://anilist.co/anime/113470/Show-By-Rock-Mashumairesh/
https://anilist.co/anime/113470/Show-By-Rock-Mashumairesh/
https://anilist.co/anime/108092/Koisuru-Asteroid/
https://anilist.co/anime/104391/Oshi-ga-Budoukan-Ittekuretara-Shinu/
https://anilist.co/anime/104462/Toaru-Kagaku-no-Railgun-T/
https://anilist.co/anime/99807/227/
`;

export interface ChartInputBoxRef
{
  getValue():number[]
}

export default forwardRef(ChartInputBox);
function ChartInputBox(props:{},ref:React.Ref<ChartInputBoxRef>)
{
  const thetextbox=useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref,()=>({
    getValue
  }));

  // return the value of the textbox, parsed into array of show IDS
  function getValue():number[]
  {
    return parseShowIds(exampleInput.split("\n"));
  }

  return <textarea className="chart-input" ref={thetextbox}></textarea>;
}

// convert array of show links to show ids. if a string is not valid,
// becomes excluded. removes duplicates.
function parseShowIds(showLinks:string[]):number[]
{
  return _.uniq(_.filter(_.map(showLinks,(x:string)=>{
    // attempt to extract id number from anilist url
    // [1]: id
    var match:RegExpMatchArray|null=x.match(/anime\/(\d+)/);

    if (!match || match.length!=2)
    {
      return null;
    }

    return parseInt(match[1]);
  })) as number[]);
}