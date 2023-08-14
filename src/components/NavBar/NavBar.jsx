import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

export default function NavBar() {
  // function handleLogOut(){
  //   userService.logOut();
  //   setUser(null)
  // }
  const ref = useRef(null)
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <Link to="/portfolio" className='nav-link' onClick={handleClick} ref={ref}>Portfolio</Link>
        &nbsp;  &nbsp;
        <Link to="/CV" className='nav-link' onClick={handleClick} ref={ref}>Experience</Link>
        &nbsp;  &nbsp;
        <Link to="/photography" className='nav-link' onClick={handleClick} ref={ref}>Photography</Link>
        &nbsp;  &nbsp;
        {/* <Link to="/videos" className='nav-link'>Video Editing</Link> */}
        {/* &nbsp;  &nbsp; */}
        <Link to="/contact" className='nav-link' onClick={handleClick} ref={ref}>Contact</Link>
        {/* <p>Welcome, {user.name}</p>
        &nbsp; &nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link> */}
      </nav>
    </div>
  );
}