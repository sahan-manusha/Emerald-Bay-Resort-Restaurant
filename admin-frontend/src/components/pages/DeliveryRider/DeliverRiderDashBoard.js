/*import React from 'react'
import DeliveryRiderSideBar from '../components/DeliveryRiderSideBar';
import '../components/css/DeliverRiderDashBoard.css';

export const DeliverRiderDashBoard = () => {
  return (
    <div>
        <DeliveryRiderSideBar />
        <div className="deliveryridercontainer">
            <h1>Delivery Rider DashBoard</h1>
        </div>
    </div>
  )
}*/

import React from 'react';
import DeliveryRiderSideBar from './DeliveryRiderSideBar.js';
import  '../../pages/DeliveryRider/DeliverRiderDashBoard.css';

export const DeliverRiderDashBoard = () => {
  return (
    <div className="dashboard-container">
      <DeliveryRiderSideBar />
      <div className="deliveryridercontainer">
        <h1>Hi</h1>
      </div>
    </div>
  );
};

