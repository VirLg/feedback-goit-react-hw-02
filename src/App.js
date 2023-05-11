import React from "react";

import {Section} from './components/section/Section'
import {Statistic} from './components/Statistic/Statistic';
import {FeedbackOptions} from './components/feedbackOptions/FeedbackOptions';

 class App extends React.Component {
state={
    good: 0,
    neutral: 0,
    bad: 0,
}

handleClick=({target:{name}})=>{
    
    // const{target:{name:{good,neutral,bad}}}=evt
        this.setState((prevState)=>{
        return{
            [name]:prevState[name]+1
            }
        });
    };
    



countTotalFeedback=()=>{
    const{good,neutral,bad}=this.state
   return good+neutral+bad
}

countPositiveFeedbackPercentage=()=>{
const{good}=this.state
return Math.round(good/(this.countTotalFeedback())*100);
}

render(){



    
  return (
    <>
 <Section>
 <FeedbackOptions
 handleClick={this.handleClick}

 
 />
</Section>

<Section>
    <Statistic
    state={this.state}
    countTotalFeedback={this.countTotalFeedback()}
    countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
    />

</Section>

</>

)
}
}

export default App;
