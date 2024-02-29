import React from 'react';
import DeliveryManagerSideBar from './DeliveryManagerSideBar.js';
import  "../../../components/pages/DeliveryManager/DeliveryManagerProfile.css";



export const DeliveryManagerProfile = () => {
  return (
    <div className="dashboard-container">
      <DeliveryManagerSideBar />
      <div className="myprofile">
        <h1>Profile section</h1> 
        <div className="profilepoto">
            
         </div>       
      </div>
    </div>
  );
};

