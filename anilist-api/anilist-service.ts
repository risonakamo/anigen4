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
            medium
            color
        }

        season
        seasonYear
        format
        genres
        siteUrl
    }
}`

// request anilist for show data for given id.
export async function queryShow(showId:number):Promise<ShowQueryResult|null>
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
    var showResults:(ShowQueryResult|null)[]=await Promise.all(_.map(showIds,(x:number)=>{
        return queryShow(x);
    }));

    var showResultsFiltered:ShowQueryResult[]=_.filter(showResults) as ShowQueryResult[];

    return _.groupBy(showResultsFiltered,(x:ShowQueryResult)=>{
        return x.format;
    }) as GroupedShowsQuery;
}