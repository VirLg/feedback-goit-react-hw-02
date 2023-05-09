import PropTypes from 'prop-types';
export const Statistic = function({state,countTotalFeedback,countPositiveFeedbackPercentage}){
    
if(!Object.values(state).find(el=>el>0)){
    return
}else{
const {good=0,neutral=0,bad=0}=state

return(
    <div>
    <h2>Feedback</h2>
 <p >GOOD : {good}</p> 
 
 <p >Neutral : {neutral}</p>
 
 <p >BAD : {bad}</p> 
 
 <p >TOTAL : {countTotalFeedback}</p> 
 <p>POSITIV FEEDBACK : {countPositiveFeedbackPercentage} %</p>
 </div>
)
}               
}                   
Statistic.propTypes={
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
}                
        
