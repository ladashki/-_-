
// JavaScript Document


import React from 'react';


class QuoteShow extends React.Component {
    render(){
        return(
        
            <div>
             <h3> {this.props.quote } </h3>
            <p> {this.props.quote2 } </p>
            </div>
            
        );
    }
}


export default QuoteShow;
