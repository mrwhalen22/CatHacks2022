import EventCard from './EventCard'
import './App.css';

function App() {

  return (
    <div className="App">
     <div className="App-Title">
       <a>UKonnect</a>
     </div>
      <nav className="App-navbar">       
        <ul>
          <li>
            <a>Home</a>
            <a>UKonnect</a>
            <a>Contact</a>
            <a>About</a></li>
        </ul>
      </nav>
      
      
      <div className='search-banner'>
        <div>
          <h4 className='search-title'>City:</h4>
          <input type="location" className="search-bar"></input>
        </div>
        <div>
          <h4 className='search-title'>Date:</h4>
          <input type="date" className="search-bar"></input>
        </div>
        <div>
          <h4 className='search-title'>Genre:</h4>
          <input type="search" className="search-bar"></input>
        </div>
        
    
      </div>
    
      <div className="card-container">
        <EventCard name="test" date="January 22 2022" location="Grehan 2nd Floor" host="ACM"/>
        <EventCard name="test" date="January 22 2022" location="Grehan 2nd Floor" host="ACM"/>
        <EventCard name="test" date="January 22 2022" location="Grehan 2nd Floor" host="ACM"/>
        <EventCard name="test" date="January 22 2022" location="Grehan 2nd Floor" host="ACM"/>
        <EventCard name="test" date="January 22 2022" location="Grehan 2nd Floor" host="ACM"/>
        <EventCard name="test" date="January 22 2022" location="Grehan 2nd Floor" host="ACM"/>
        <EventCard name="test" date="January 22 2022" location="Grehan 2nd Floor" host="ACM"/>
        <EventCard name="test" date="January 22 2022" location="Grehan 2nd Floor" host="ACM"/>
        <EventCard name="test" date="January 22 2022" location="Grehan 2nd Floor" host="ACM"/>
        <EventCard name="test" date="January 22 2022" location="Grehan 2nd Floor" host="ACM"/>
        
      </div>
    </div>
  );
}

export default App;
