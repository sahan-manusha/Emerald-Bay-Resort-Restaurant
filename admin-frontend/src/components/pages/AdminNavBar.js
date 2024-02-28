import React from 'react'
import logo from '../images/EMERALDBAYLOGO.png';


export const AdminNavBar = () => {
  return (
    <div>
        <div className="navbar">
            <a href="/"><img src={logo} alt="logo" style={{width:'150px', marginLeft:'50px'}} /></a>
            
        </div>
    </div>
  )
}
