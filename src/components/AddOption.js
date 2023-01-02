import React from 'react';

export default class AddOption extends React.Component{
    state = {
        error: undefined
    };

    handleAddOption = (event) => {
        event.preventDefault();
        const option = event.target.elements.inputoption.value.trim();
        const error = this.props.handleAddOption(option)
        if(error){
            this.setState(()=>({error}))
        }else{
            this.setState(()=>({error: undefined}))
        }
        event.target.elements.inputoption.value = '';
        
    }



    render(){
        return(
            <div>
            {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
            <form className='add-option' onSubmit={this.handleAddOption}>
                <input className='add-option__input' type="text" name="inputoption" />
                <button className='button'>Add Option</button>
            </form>
            </div>
        )
    }
}


