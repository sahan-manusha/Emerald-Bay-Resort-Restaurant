import React from 'react';
import ReservationManagerSideBar from "./ReservationManagerSideBar";



export const TableReservations = () => {
    return (
      <div style={{display:'flex'}}>
          <ReservationManagerSideBar/>
          <h1>Table Reservations</h1>
      </div>
    )
}