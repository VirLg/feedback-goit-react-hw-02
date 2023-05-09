
export const Statistic = function({state,countTotalFeedback,countPositiveFeedbackPercentage}){
if(!Object.values(state).find(el=>el>0)){
    return
}else{


return(
    <div>
    <h2>Feedback</h2>
 <p >GOOD : {state.good}</p> 
 
 <p >Neutral : {state.neutral}</p>
 
 <p >BAD : {state.bad}</p> 
 
 <p >TOTAL : {countTotalFeedback}</p> 
 <p>POSITIV FEEDBACK : {countPositiveFeedbackPercentage} %</p>
 </div>
)
}               
}                   
                    
        
