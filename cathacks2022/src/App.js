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
    
  }
  
  AddEvent(name, location, date, host) {
    this.events.push(new Event(name, location, date, host));
  }

  DisplayEvents() {
    let EventCardElements = [];
    for (const [name, event] of Object.entries(this.events)) {
      EventCardElements.push(new EventCard({name : event.name, location : event.location, date : event.date}))
    }
    return EventCardElements;
  }
  

  render() {
    

    
    
    return (
    <div className="App">
      <nav className="App-navbar">       
            <a className='navbar-element'>Home</a>
            <a className='navbar-element'>UKonnect</a>
              <h1 className="App-Title">UKonnect</h1>
            <a className='navbar-element'>Contact</a>
            <a className='navbar-element'>About</a>
      </nav>
      
      
      <div className='search-banner'>
        <label>Search Events</label>
        <input className="search-txt" type="search" id="search" data-search></input>
        <a className="search-btn" href="#"></a>
      </div>
    
      <div className="card-container">
        
        {
          this.props.events.map(event => 
            (<EventCard id={event.id} key={event.name} name={event.name} date={event.date} location={event.location} host={event.host} />)
            )
        } 
        

      </div>
    </div>
    
  );
  
}

}


export default App;
