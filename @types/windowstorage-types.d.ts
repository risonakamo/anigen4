interface WindowStorage
{
    // array of saved inputs, with newest at the FRONT
    savedInputs:ChartInput[]
}

interface ChartInput
{
    title:string
    showIds:number[]
}