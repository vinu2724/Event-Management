import React from 'react'
import EventList from '../Pages/EventList/EventList'
import FilterEvents from '../Pages/FilterEvents/FilterEvents'
import EventDetails from '../Pages/EventDetails/EventDetails'
import Dashboard from '../Pages/Dashboard/Dashboard'

export const routes= ([
    {
      path: '/',
      element: <EventList/>
    },
    {
      path: '/find-events',
      element:<FilterEvents/>
    },
    {
      path:'/events/:id',   
      element:<EventDetails/>
    },
    {
      path:'/dashboard', 
      element:<Dashboard/>
    }

  ])