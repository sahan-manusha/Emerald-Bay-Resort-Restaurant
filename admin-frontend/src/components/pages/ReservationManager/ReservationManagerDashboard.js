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
import ReservationManagerSideBar from './ReservationManagerSideBar.js';
import  "../../../components/pages/ReservationManager/ReservationManagerDashboard.css";
import deliverylorry from "../../images/deliverylorry.png";
import succesimg from "../../images/successmark.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faTruckFast } from '@fortawesome/free-solid-svg-icons';



export const ReservationManagerDashboard = () => {
  return (
    <div className="dashboard-container">
      <ReservationManagerSideBar />
      <div className="deliveryridercontainer">
        
        <div className="orderset">

          <div className="ongoing">
          <img  className="ongoingimg" src={succesimg} alt="correct" />
              <h3>Ongoing Reservations</h3>
              <h2 style={{marginBottom:'5px'}}>100</h2>
          </div>

          <div className="cancel">
          <img  className="ongoingimg" src={succesimg} alt="correct" />
              <h3>Cancelled Reservations</h3>
              <h2 style={{marginBottom:'5px'}}>5</h2>
          </div>
        </div>

        
      </div>
    </div>
  );
};