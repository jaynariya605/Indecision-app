import React from "react";
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from "./OptionModal";


export default class IndecisionApp extends React.Component{

    state = {
            options: this.props.options,
            selectedOption: undefined
        };

    

    componentDidMount(){

        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(()=> ({ options }));
            }
        }catch(e){
            //Do nothing
        }
        
        
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            console.log('saving Data');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        
    }

    
    handleAddOption = (opt)=>{
        if(!opt){
            return 'Enter Valid option'
        }    
        const found = this.state.options.findIndex((option)=> option === opt)
        if(found !== -1){
            return'Option Already exists'
        }

        this.setState((prevState)=>({options: prevState.options.concat([opt])}))
        
    }

    handleModal = () =>{
        this.setState(()=>({selectedOption: undefined}))
    }

    //handleDeleteOptions
    handleDeleteOptions = () => {
        this.setState(()=>({options: []}));
    }


    handleDeleteOption = (opt) =>{
        this.setState((prevState)=>{ 
            return {
                options: prevState.options.filter((option)=> option !== opt)
            }
            })

    }

    handlePick = () =>{
        const randomNum  = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>({
            selectedOption: option
        }))
    }

    render(){
        const app = {
            subtitle: 'Put your life in the hands of a computer'
        }
        return (
            <div>
                <Header title={app.title} subtitle={app.subtitle} />
                <div className="container">
                <Action hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                <div className="widget">
                    <Options options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                    handleDeleteOptions={this.handleDeleteOptions}
                    />
                    <AddOption handleAddOption={this.handleAddOption}/>
                </div>

                </div>
                <OptionModal handleModal={this.handleModal} selectedOption={this.state.selectedOption}/>
            </div>
            )
        
    }
}

IndecisionApp.defaultProps = {
    options: []
}