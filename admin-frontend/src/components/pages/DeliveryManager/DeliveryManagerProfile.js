import React from 'react';
import DeliveryManagerSideBar from './DeliveryManagerSideBar.js';
import  "../../../components/pages/DeliveryManager/DeliveryManagerProfile.css";
import { MyProfile } from '../../common/MyProfile.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';


export const DeliveryManagerProfile = () => {
  return (
    <div className="dashboard-container">
      <DeliveryManagerSideBar />
      <div className="myprofile">
        {/* <h1>Profile section</h1> */}
        <div className="profilepoto">
            <MyProfile/>
        </div>      
        <div className="updateuser">
          <button><FontAwesomeIcon icon={faUserPen} beat size='2xl'/></button></div> 
      </div>
    </div>
  );
};

