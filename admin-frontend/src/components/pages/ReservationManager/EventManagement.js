import React from 'react';
import ReservationManagerSideBar from "./ReservationManagerSideBar";



export const EventManagement = () => {
    return (
      <div style={{display:'flex'}}>
          <ReservationManagerSideBar/>
          <h1>Events</h1>
      </div>
    )
}