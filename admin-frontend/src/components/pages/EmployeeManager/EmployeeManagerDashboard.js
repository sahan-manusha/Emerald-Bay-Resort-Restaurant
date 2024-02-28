import React from 'react';
import EmployeeManagerSideBar from "../EmployeeManager/EmployeeManagerSideBar";


export const EmployeeManagerDashboard = () => {
  return (
    <div style={{display:'flex'}}>
        <EmployeeManagerSideBar/>
        <h1>Employees</h1>
    </div>
  )
}
