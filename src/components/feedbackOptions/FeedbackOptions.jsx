export const FeedbackOptions=function({handleClick}){
    return(
        
<div>
<button name="good" type="button"onClick={handleClick}>Good</button>
<button name="neutral" type="button"onClick={handleClick}>Neutral</button>
<button name="bad" type="button"onClick={handleClick}>Bad</button>
</div>
    )
}