import React from 'react';
import './PastEvent.css';
import { eventList } from '../../Utils/EventDatabase'; 
import EventCard from '../../Components/EventCard/EventCard';
import Navigation from '../../Components/Navigation/Navigation';

const PastEvent = () => {
  const currentDate = new Date();  
  
  
  const pastEvents = eventList.filter(event => {
    const eventDate = new Date(`${event.date.year}-${event.date.month}-01`);
    return eventDate < currentDate; 
  });

  const renderEventCards = () => {
    return pastEvents.map(({ id, date, heading, location, img, description}) => {
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
   
      <div className="past-event-wrapper">
        <div className="past-event-list">
          {pastEvents.length > 0 ? (
            renderEventCards()
          ) : (
            <p>No past events available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PastEvent;
