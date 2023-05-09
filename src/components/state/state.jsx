// import React from "react";

//  class Feedback extends React.Component {
// state={
//     good:0,
//     nature:0,
//     bad:0,
// }

//     handleGood=()=>{
//         this.setState((prevState)=>{
//         return{
//             good:prevState.good+1
//             }
//         });
//     };
    
// handleNature=()=>{this.setState((prevState)=>{
//     return{
//         nature:prevState.nature+1
//     }
// });
// };

// handleBad=()=>{this.setState((prevState)=>{
//     return{
//         bad:prevState.bad+1
//     }
// });};


//     render(){
//         return(
//             <div>
//                 <div>
//                  <h2>Feedback</h2>
                 
//                 </div>
//                 <p className="good__value">{this.state.good}</p>
//                 <button type="button"onClick={this.handleGood}>Good</button>
//                 <p className="nature__value">{this.state.nature}</p>
//                 <button type="button"onClick={this.handleNature}>Nature</button>
//                 <p className="bad__value">{this.state.bad}</p>
//                 <button type="button"onClick={this.handleBad}>Bad</button>
                
//             </div>

//         )
//     }
// }

// export default Feedback