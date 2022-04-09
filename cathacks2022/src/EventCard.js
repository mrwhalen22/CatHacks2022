import React from "react"
import "./EventCard.css"

class EventCard extends React.Component {

    render() {
        
        return <div className="event-card">
            <div className="event-image"></div>
            <h3 className="event-name">{this.props.name}</h3>
            <div className="event-date-container">
                <h4 className="event-date">{this.props.date}</h4>
            </div>
            <h4 className="event-location">{this.props.location}</h4>
            <button className="event-button"><span>RSVP Here</span></button>

        </div>

    }

}

export default EventCard