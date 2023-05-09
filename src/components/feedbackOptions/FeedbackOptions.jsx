export const FeedbackOptions=function({handleGood,handleBad,handleNature}){
    return(
        
<div>
<button type="button"onClick={handleGood}>Good</button>
<button type="button"onClick={handleNature}>Nature</button>
<button type="button"onClick={handleBad}>Bad</button>
</div>
    )
}