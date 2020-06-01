// JavaScript Document
//import './button.css';
import React from 'react';

class Info extends React.Component {
    render(){
        return(
        <form onSubmit={this.props.quoteMethod} > 
            
            <button> refresh </button>
        </form>    
        );
    }
}


export default Info;
