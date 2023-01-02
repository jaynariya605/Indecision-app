import React from "react";
import Option from "./Option";

const Options = (props) =>(
        <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button className="button button--link" onClick={props.handleDeleteOptions}>Remove all</button>
        
        </div>
       
        <div>
        {!props.options.length > 0 && <p className="widget--message"> Please add Option to get started</p>}
        {
            props.options.map((option, index)=><Option 
            handleDeleteOption={props.handleDeleteOption}
             key={option} 
             option={option}
             count = {index + 1}
             />)
        }
        
        </div>
        </div>
    )


export default Options

// class Options extends React.Component{
    
//     render(){
//         return (
//             <div>
            
//             <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//             <ol>
//             {
//                 this.props.options.map((option)=><Option key={option} option={option}/>)
//             }
            
//             </ol>
//             </div>
//         )
//     }
// }