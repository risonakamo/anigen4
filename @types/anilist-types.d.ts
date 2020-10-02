interface ShowQueryResult
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
    format:string
    genres:string[]
}

interface ShowQueryResultWrapper
{
    data:{
        Media:ShowQueryResult
    }
}