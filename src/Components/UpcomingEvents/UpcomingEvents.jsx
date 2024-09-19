import React from 'react';
import './UpcomingEvents.css';
import { eventList } from '../../Utils/EventDatabase'; 
import EventCard from '../../Components/EventCard/EventCard';
import Navigation from '../../Components/Navigation/Navigation';

const UpcomingEvents = () => {
  const currentDate = new Date(); 
  
 
  const upcomingEvents = eventList.filter(event => {
    const eventDate = new Date(`${event.date.year}-${event.date.month}-01`);
    return eventDate > currentDate;
  });

  const renderEventCards = () => {
    return upcomingEvents.map(({ id, date, heading, location, img,description }) => {
      return (
        <EventCard key={id}
          id={id}
          date={date}
          heading={heading}
          location={location}
          img={img}
          description={description}
        />
      );
    });
  };

  return (
    <div>
     
      <div className="upcoming-event-wrapper">
        <div className="upcoming-event-list">
          {upcomingEvents.length > 0 ? (
            renderEventCards()
          ) : (
            <p>No upcoming events available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
