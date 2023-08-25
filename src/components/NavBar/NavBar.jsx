import { Link } from 'react-router-dom';
import { useState } from 'react';
import About from '../../pages/About/About';

export default function NavBar(handleNavLinkClick) {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [aboutVisible, setAboutVisible] = useState(true)

  const onNavClick = () => {
    if (window.innerWidth <= 768) {
      setAboutVisible(false)
    }
  }
  
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <Link to="/" onClick={() => {
                  setIsNavExpanded(false)
                }}>
          <div className="nav-me-container-container item">
              <div className="nav-me-container">
                  <img src="https://i.imgur.com/9OnseTY.jpg" id="me"/>
              </div>
          </div>
        </Link>
        <div className= {
          isNavExpanded ? "navigation-menu expanded" : 'navigation-menu'
        }
        >
            <ul>
              <li>
                <Link to="/portfolio" className='nav-link' onClick={() => {
                  setIsNavExpanded(!isNavExpanded)
                }}> Portfolio</Link>
              </li>
              &nbsp;  &nbsp;
              <li>
                <Link to="/CV" className='nav-link' onClick={() => {
                  setIsNavExpanded(!isNavExpanded)
                  }}> Experience</Link>
              </li>
              &nbsp;  &nbsp;
              <li>
                <Link to="/photography" className='nav-link' onClick={() => {
                  setIsNavExpanded(!isNavExpanded)
                }}> Photography</Link>
              </li>
              &nbsp;  &nbsp;
              <li>
                <Link to="/contact" className='nav-link' onClick={() => {
                  setIsNavExpanded(!isNavExpanded)
                }}> Contact</Link>
              </li>
                {/* <Link to="/videos" className='nav-link'>Video Editing</Link> */}
                {/* &nbsp;  &nbsp; */}
            </ul>
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