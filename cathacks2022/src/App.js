import logo from './logo.svg';
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
      
      
      <div>
        City:
          <input type="search" className="search-bar"></input>
        Date: 
          <input type="search" className="search-bar"></input>
        Genre:
        <input type="search" className="search-bar"></input>
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
