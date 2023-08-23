import { Link } from 'react-router-dom';


export default function Hamburger(){
    return(
        <div className="hamburger-container">
            <ul className="hamburger-list">
                <li> 
                    <Link to="/portfolio" className='nav-link' >Portfolio</Link>
                </li>
                <li>
                    <Link to="/CV" className='nav-link' >Experience</Link>

                </li>
                <li>
                    <Link to="/photography" className='nav-link' >Photography</Link>

                </li>
                <li>
                    <Link to="/contact" className='nav-link' >Contact</Link>
                </li>

            </ul>
        </div>
    )
}