interface ShowInfo
{
    title:{
        romaji:string
    }

    coverImage:{
        large:string
        color:string
    }

    startDate:{
        year:number
        month:number
        day:number
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
type GroupedShowsQuery=Record<ShowFormats|string,ShowInfo[]>;