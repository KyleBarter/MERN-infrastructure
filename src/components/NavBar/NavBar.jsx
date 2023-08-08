import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
  // function handleLogOut(){
  //   userService.logOut();
  //   setUser(null)
  // }
 

  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <Link to="/portfolio" className='nav-link'>Portfolio</Link>
        &nbsp;  &nbsp;
        <Link to="/CV" className='nav-link'>Experience</Link>
        &nbsp;  &nbsp;
        <Link to="/photography" className='nav-link'>Photography</Link>
        &nbsp;  &nbsp;
        {/* <Link to="/videos" className='nav-link'>Video Editing</Link> */}
        {/* &nbsp;  &nbsp; */}
        <Link to="/contact" className='nav-link'>Contact</Link>
        {/* <p>Welcome, {user.name}</p>
        &nbsp; &nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link> */}
      </nav>
    </div>
  );
}