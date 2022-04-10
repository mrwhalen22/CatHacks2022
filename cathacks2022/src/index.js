import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import EventCard from './EventCard'

class Event {
    constructor(id, name, location, date, host, url) {
      this.id = id;
      this.name = name;
      this.location = location;
      this.date = date;
      this.host = host;
      this.url = url;
  
    }
}
    function AddEvent(id, name, location, date, host, url) {
        events.push(new Event(id, name, location, date, host, url));
      }
let events = []
AddEvent(0, "Cat Hacks VII", "Grehan First Floor", "April 9th, 2022", "UK ACM","./UKFootball.jpg");
AddEvent(1, "UGC Exec Meeting", "GSC 330C", "April 11th, 2022", "United Greek Council", "./GreekCouncil.png");
AddEvent(2, "CPA Exam Info", "Gatton B&E", "April 11th, 2022", "KY-CPA","./cpaExam.png");
AddEvent(3, "FREE Cookies", "Gatton Student Center", "April 11th, 2022", "Financial Wellness","./FreeCookies.png");
AddEvent(4, "UKCS Practice", "Johnson Center", "April 12th, 2022", "UK=ACM","./Swimming.png");
AddEvent(5, "Registration 101", "Gatton Student Center", "April 12th, 2022", "UK--ACM","./Registration.png");

ReactDOM.render(<App events={events}/>, document.getElementById('root'));
let eventCards = document.getElementsByClassName("event-card");
events.forEach(user => {
    console.log(document.getElementById(user.id).firstChild);
    document.getElementById(user.id).firstChild.style.backgroundImage = "url('" + user.url + "')";
})




const searchInput = document.querySelector("[data-search]");
  searchInput.addEventListener("input", (e) =>{
    const value = e.target.value
    let eventCards = document.getElementsByClassName("event-card");
    for(let eventCard of eventCards)
    events.forEach(user => {
        const isVisible = user.name.includes(value) || user.location.includes(value) || user.date.includes(value)
        
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