import React from "react";


const Action = (props) =>  (
        <div>
            <button className="big-button" disabled={!props.hasOptions && 'disabled'} onClick={props.handlePick}>What should I do?</button>
            
        </div>
    )


export default Action

// class Action extends React.Component{

//     render(){
//         return (
//             <div>
//                 <button disabled={!this.props.hasOptions && 'disabled'} onClick={this.props.handlePick}>What should I do?</button>
                
//             </div>
//         )
//     }
// }
