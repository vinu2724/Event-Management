import React from 'react'
import './EventList.css'
import { eventList } from '../../Utils/EventDatabase'
import EventCard from '../../Components/EventCard/EventCard'
import Navigation from '../../Components/Navigation/Navigation'

const EventList = () => {
  const renderEventCards = () => {
    return eventList.map(({ id, date, heading, location, img , description }) => {
      return (
        <EventCard key={id}
          id={id}
          date={date}
          heading={heading}
          location={location}
          img={img}
          description={description} />

      )
    })
  }
  return (
    <div>
    <Navigation/>
    <div className="event-list-wrapper">
      <div className="event-list">
        {eventList.length > 0 ? (
          renderEventCards()
        ) : (
          <p>No events available</p>
        )}
      </div>  
    </div>
  </div>
  )
}

export default EventList