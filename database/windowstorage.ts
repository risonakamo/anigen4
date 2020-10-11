// get the saved inputs
export function getSavedInputs():ChartInput[]
{
    return JSON.parse(window.localStorage.getItem("savedInputs") as string) || [];
}

// add a new saved input to the saved inputs
export function addSavedInput(input:ChartInput):void
{
    var newSavedInputs:ChartInput[]=[
        input,
        ...getSavedInputs()
    ];

    window.localStorage.setItem("savedInputs",JSON.stringify(newSavedInputs));
}