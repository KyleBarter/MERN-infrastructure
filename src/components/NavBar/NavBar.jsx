import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';

export default function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <div className="nav-me-container-container item">
            <div className="nav-me-container">
                <img src="https://i.imgur.com/9OnseTY.jpg" id="me"/>
            </div>
        </div>
        <div className= {
          isNavExpanded ? "navigation-menu expanded" : 'navigation-menu'
        }
        >
          <ul>
            <li>
              <Link to="/portfolio" className='nav-link' onClick={() => {
                setIsNavExpanded(!isNavExpanded)
              }}>Portfolio</Link>
            </li>
            &nbsp;  &nbsp;
            <li>
              <Link to="/CV" className='nav-link' onClick={() => {
                setIsNavExpanded(!isNavExpanded)
              }}>Experience</Link>
            </li>
            &nbsp;  &nbsp;
            <li>
              <Link to="/photography" className='nav-link' onClick={() => {
                setIsNavExpanded(!isNavExpanded)
              }}>Photography</Link>
            </li>
            &nbsp;  &nbsp;
            <li>
              <Link to="/contact" className='nav-link' onClick={() => {
                setIsNavExpanded(!isNavExpanded)
              }}>Contact</Link>
            </li>
          </ul>
        {/* <Link to="/videos" className='nav-link'>Video Editing</Link> */}
        {/* &nbsp;  &nbsp; */}
        </div>
        <button className='hamburger-item item'
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
          <div className='hamburger-btn'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </button>
      </nav>
    </div>
  );
}