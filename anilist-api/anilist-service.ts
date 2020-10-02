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