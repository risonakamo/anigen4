import _ from "lodash";

// mirror from showquery.graphql
const showQuery=`
query ($id:Int)
{
    Media(id:$id)
    {
        title {
            romaji
        }

        coverImage {
            large
            color
        }

        startDate {
            year
            month
            day
        }

        season
        seasonYear
        format
        genres
        siteUrl
    }
}`

// request anilist for show data for given id.
export async function queryShow(showId:number):Promise<ShowInfo|null>
{
    var queryResult:ShowQueryResultWrapper=await (await fetch("https://graphql.anilist.co",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify({
            variables:{
                id:showId
            },
            query:showQuery
        })
    })).json();

    return queryResult.data.Media;
}

// request anilist show data for multiple shows, sort into category
export async function queryShows(showIds:number[]):Promise<GroupedShowsQuery>
{
    var showResults:(ShowInfo|null)[]=await Promise.all(_.map(showIds,(x:number)=>{
        return queryShow(x);
    }));

    var showResultsFiltered:ShowInfo[]=_.filter(showResults) as ShowInfo[];

    return _.groupBy(showResultsFiltered,(x:ShowInfo)=>{
        return x.format;
    }) as GroupedShowsQuery;
}