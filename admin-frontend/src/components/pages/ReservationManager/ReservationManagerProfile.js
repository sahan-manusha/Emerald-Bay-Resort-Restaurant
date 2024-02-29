import React from 'react';
import ReservationManagerSideBar from "./ReservationManagerSideBar";



export const ReservationManagerProfile = () => {
  return (
    <div className="dashboard-container">
      <ReservationManagerSideBar />
      <div className="myprofile">
        <h1>Profile section</h1> 
        <div className="profilepoto">
            
         </div>       
      </div>
    </div>
  );
};