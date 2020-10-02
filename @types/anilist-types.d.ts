interface ShowInfo
{
    title:{
        romaji:string
    }

    coverImage:{
        medium:string
        color:string
    }

    season:"SPRING"|"WINTER"|"SUMMER"|"FALL"
    seasonYear:number
    format:ShowFormats
    genres:string[]
    siteUrl:string
}

interface ShowQueryResultWrapper
{
    data:{
        Media:ShowInfo
    }
}

type ShowFormats="MOVIE"|"ONA"|"TV"|"TV_SHORT";

// arrays of shows keyed by their format
type GroupedShowsQuery=Record<ShowFormats,ShowInfo[]>;