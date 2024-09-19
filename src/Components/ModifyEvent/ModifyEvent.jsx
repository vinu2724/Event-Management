import React, { useState } from 'react';
import { eventList } from '../../Utils/EventDatabase';

const ModifyEvent = () => {
  // State to store new event details
  const [newEvent, setNewEvent] = useState({
    id: '',
    heading: '',
    year: '',
    month: '',
    location: '',
    description: '',
    img: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setNewEvent({
      ...newEvent,
      [e.target.name]: e.target.value
    });
  };

  // Add new event to the event list
  const addEvent = () => {
    // Set the id dynamically based on the last id in the eventList
    const lastId = eventList[eventList.length - 1].id;
    const eventToAdd = {
      ...newEvent,
      id: lastId + 1, // Increment id for the new event
      date: { year: newEvent.year, month: newEvent.month }, // Format date
      img: newEvent.img || "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg", // Set default img if empty
    };

    // Add the new event to the eventList
    eventList.push(eventToAdd);

    // Clear the input fields
    setNewEvent({
      id: '',
      heading: '',
      year: '',
      month: '',
      location: '',
      description: '',
      img: ''
    });

    console.log("New event added:", eventToAdd); // Check console for added event
  };

  return (
    <div>
      <h2>Add New Event</h2>
      <input
        type="text"
        name="heading"
        placeholder="Event Heading"
        value={newEvent.heading}
        onChange={handleChange}
      />
      <input
        type="text"
        name="year"
        placeholder="Year"
        value={newEvent.year}
        onChange={handleChange}
      />
      <input
        type="text"
        name="month"
        placeholder="Month"
        value={newEvent.month}
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={newEvent.location}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Event Description"
        value={newEvent.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="img"
        placeholder="Image URL (optional)"
        value={newEvent.img}
        onChange={handleChange}
      />
      <button onClick={addEvent}>Add Event</button>
    </div>
  );
};

export default ModifyEvent;
