import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import EventCard from './EventCard'

class Event {
    constructor(id, name, location, date, host) {
      this.id = id;
      this.name = name;
      this.location = location;
      this.date = date;
      this.host = host;
  
    }
}
    function AddEvent(id, name, location, date, host) {
        events.push(new Event(id, name, location, date, host));
      }
let events = []
AddEvent(0, "Cat Hacks VII", "Grehan First Floor", "April 9th, 2022", "UK");
AddEvent(1, "Cat Hacks VI", "Grehan Second Floor", "April 10th, 2022", "UK ACM");
AddEvent(2, "Cat Hacks V", "Grehan Third Floor", "April 11th, 2022", "UK-ACM");
AddEvent(3, "Cat Hacks IX", "Grehan Fourth Floor", "April 12th, 2022", "UK+ACM");
AddEvent(4, "Cat Hacks X", "Grehan Fifth Floor", "April 13th, 2022", "UK=ACM");
AddEvent(5, "Cat Hacks VIII", "Grehan Sixth Floor", "April 14th, 2022", "UK--ACM");

ReactDOM.render(<App events={events}/>, document.getElementById('root'));
const searchInput = document.querySelector("[data-search]");
  searchInput.addEventListener("input", (e) =>{
    const value = e.target.value
    let eventCards = document.getElementsByClassName("event-card");
    for(let eventCard of eventCards)
    events.forEach(user => {
        const isVisible = user.name.includes(value) || user.location.includes(value) || user.date.includes(value)
        
        // var style = '#' + user.id + ' {';
        // style += 'display : none;';
        // style += '}';
        // console.log(sheet)
        if(!isVisible) {
            const sheet = document.getElementById(user.id).style.display = "none";
            // sheet.insertRule(style, 0)
        }
        else {
            document.getElementById(user.id).style.display = "block";
            eventCard.classList.toggle(user.id, !isVisible)
        }
        
        
        
    })
  })

  /*for(let eventCard of eventCards) {
        console.log(eventCard)
        const isVisible = eventCard.props.name.includes(value) || eventCard.location.includes(value) || eventCard.date.includes(value)

        eventCard.classList.toggle("hide", !isVisible)
        console.log(eventCard.classList)
    }*/