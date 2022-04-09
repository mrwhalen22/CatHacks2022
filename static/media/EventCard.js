import React from "react"
import logo from "./logo.svg"
import "./EventCard.css"

class EventCard extends React.Component {



    render() {
        return <div className="event-card ">  
            <img src={logo}></img>
            <h3 className="event-card-name">{this.props.name}</h3>
            <h4 className="event-card-date">{this.props.date}</h4>
            <h4 className="event-card-host">{this.props.host}</h4>
        
         </div>

    }


}

export default EventCard