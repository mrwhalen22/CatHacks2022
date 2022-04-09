import EventCard from './EventCard'
import './App.css';
import React from 'react';

class Event {
  constructor(name, location, date, host) {
    this.name = name;
    this.location = location;
    this.date = date;
    this.host = host;

  }

}

class App extends React.Component {


  constructor(props) {
    super(props);
    this.events = [];
  }
  
  AddEvent(name, location, date, host) {;
    this.events.push(new Event(name, location, date, host));
  }



  render() {
    this.AddEvent("Cat Hacks VIII", "Grehan Second Floor", "April 9th, 2022", "UK ACM");
    this.AddEvent("Cat Hacks VIII", "Grehan Second Floor", "April 9th, 2022", "UK ACM");
    this.AddEvent("Cat Hacks VIII", "Grehan Second Floor", "April 9th, 2022", "UK ACM");
    this.AddEvent("Cat Hacks VIII", "Grehan Second Floor", "April 9th, 2022", "UK ACM");
    this.AddEvent("Cat Hacks VIII", "Grehan Second Floor", "April 9th, 2022", "UK ACM");
    this.AddEvent("Cat Hacks VIII", "Grehan Second Floor", "April 9th, 2022", "UK ACM");

    let myHTML = (
    <div className="App">
      <nav className="App-navbar">       
            <a className='navbar-element'>Home</a>
            <a className='navbar-element'>UKonnect</a>
              <h1 className="App-Title">UKonnect</h1>
            <a className='navbar-element'>Contact</a>
            <a className='navbar-element'>About</a>
      </nav>
      
      
      <div className='search-banner'>
        <div>
          <h4 className='search-title'>Search:</h4>
          <input type="location" className="search-bar"></input>
        </div>
        
    
      </div>
    
      <div className="card-container">
        
        {
          this.events.map(event => <EventCard key={event.name} name={event.name} date={event.date} location={event.location} host={event.host}/>)
        } 
        

      </div>
    </div>
  );

  
  return myHTML;

}
}

export default App;
