import React, { useState } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import './Dashboard.css';
import AllEvent from '../../Components/AllEvent/AllEvent';
import EventCategories from '../../Components/EventCategories/EventCategories';
import PastEvent from '../../Components/PastEvent/PastEvent';
import UpcomingEvents from '../../Components/UpcomingEvents/UpcomingEvents';
import ModifyEvent from '../../Components/ModifyEvent/ModifyEvent';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('All Event'); 


  const renderContent = () => {
    switch (selectedOption) {
      case 'All Event':
        return <AllEvent />;
      case 'Event Categories':
        return <EventCategories />;
      case 'Past Events':
        return <PastEvent />;
      case 'Upcoming Events':
        return <UpcomingEvents />;
      case 'Modify Events':
        return <ModifyEvent />;
      default:
        return <p>Please select an option.</p>;
    }
  };

  return (
    <div className='frame'>
      <Navigation />
      
      <div className="main">
        <div className="sideline">
          <ul>
            <li onClick={() => setSelectedOption('All Event')}>All Event</li>
            <li onClick={() => setSelectedOption('Event Categories')}>Event Categories</li>
            <li onClick={() => setSelectedOption('Past Events')}>Past Events</li>
            <li onClick={() => setSelectedOption('Upcoming Events')}>Upcoming Events</li>
            <li onClick={() => setSelectedOption('Modify Events')}>Modify Events</li>
            
          </ul>
        </div>
        <div className="mainContent">
          <div className="Econtent">
            {renderContent()}
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
