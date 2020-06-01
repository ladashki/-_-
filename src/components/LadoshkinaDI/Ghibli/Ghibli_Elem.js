import React from 'react';
import Info from "./info";
import QuoteShow from "./quote";
//import './App.css';

class App extends React.Component {
    
    state= { 
        film: undefined,
        about: undefined
        
}

// constructor(){
//    super();
//    this.state = { quote: null };
//}   
    
    
getQuote = async(e) => {
    e.preventDefault();
    const i=0;
    const api_url = await fetch("https://ghibliapi.herokuapp.com/films")
    const data = await api_url.json();
    console.log(data);
  
    
      this.setState({
 
     film:  data[i].title,
          about : data[i].description
    });
    
    console.log(data.film);
}


    render(){
        return(
        <div> 
         <Info quoteMethod={this.getQuote} /><QuoteShow quote={this.state.film} quote2={this.state.about} />

        </div>

        );
    }
}

export default App;
//
//-----------------------------------------------
//const app = document.getElementById('root');
//
//const logo = document.createElement('img');
//logo.src = 'logo.png';
//
//const container = document.createElement('div');
//container.setAttribute('class', 'container');
//
////app.appendChild(logo);
////app.appendChild(container);
//
//var request = new XMLHttpRequest();
//request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
//request.onload = function () {
//
//  // Begin accessing JSON data here
//  var data = JSON.parse(this.response);
//  if (request.status >= 200 && request.status < 400) {
//    data.forEach(movie => {
//      const card = document.createElement('div');
//      card.setAttribute('class', 'card');
//
//      const h1 = document.createElement('h1');
//      h1.textContent = movie.title;
//
//      const p = document.createElement('p');
//      movie.description = movie.description.substring(0, 300);
//      p.textContent = `${movie.description}...`;
//
////      container.appendChild(card);
////      card.appendChild(h1);
////      card.appendChild(p);
//    });
//  } else {
//    const errorMessage = document.createElement('marquee');
//    errorMessage.textContent = `Gah, it's not working!`;
//    //app.appendChild(errorMessage);
//  }
//}
//
//request.send();
