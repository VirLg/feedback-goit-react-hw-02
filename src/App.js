import React from "react";

import {Section} from './components/section/Section'
import {Statistic} from './components/Statistic/Statistic';
import {FeedbackOptions} from './components/feedbackOptions/FeedbackOptions';

 class App extends React.Component {
state={
    good:0,
    neutral:0,
    bad:0,
}

handleGood=()=>{
        this.setState((prevState)=>{
        return{
            good:prevState.good+1
            }
        });
    };
    
handleNature=()=>{this.setState((prevState)=>{
    return{
        neutral:prevState.neutral+1
    }
});
};


   


handleBad=()=>{this.setState((prevState)=>{
    return{
        bad:prevState.bad+1
    }
});
};


countTotalFeedback=()=>
    this.state.good+this.state.neutral+this.state.bad

countPositiveFeedbackPercentage=()=>
Math.round(this.state.good/(this.countTotalFeedback())*100);



render(){
  return (
    <>
 <Section>
 <FeedbackOptions
 handleGood={this.handleGood}
 handleNature={this.handleNature}
 handleBad={this.handleBad}
 
 
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
