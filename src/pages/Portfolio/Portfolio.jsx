import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";


export default function Portfolio(){



    return (
        <div className="portfolio-container" data-mouse-down-at="0" data-prev-percentage="0">
                <Fade delay={350} up duration={1500}>
                        <div className='project-container mastermind-container'>
                                <div className='mastermind-details'>
                        <Link to="/portfolio/mastermind" className='port-link'>
                                <h1>Mastermind</h1>
                        </Link>
                                <p>My first project with General Assembly during my Software Engineering Immersive course.</p>
                                <p> We had a week to create a browser game with win / loss logic, in which I opted to create Mastermind.</p>
                                </div>
                                <a href="https://kylebarter.github.io/Mastermind/">
                                        <div className='port-image-container'>
                                                <img className="port-image mastermind-image" src="https://i.imgur.com/bG3vR2a.png" draggable="false"/>
                                        </div>
                                </a>
                        </div>
                        <div className='project-container hours-container'>
                                <div className='hours-details'>
                        <Link to="/portfolio/24hours" className='port-link'>
                                <h1>24Hours</h1>
                        </Link>
                                <p>The second project with General Assembly, we were briefed to create a CRUD app using 
                                        MongoDB, Node.js and Express. </p>
                                <p>I went with an app which I wanted to create when I first started teaching myself how to
                                        code, a goal planning app to help anyone who might find themselves stuck in a hole they
                                        can't get out of.</p>
                                </div>
                                <a href="https://24hours.fly.dev/today">
                                        <div className='port-image-container'>
                                                <img className="port-image" src="https://i.imgur.com/wAKJmpf.png" draggable="false"/>
                                        </div>
                                </a>
                        </div>
                        <div className='project-container adoptly-container'>
                                <div className='adoptly-details'>
                        <Link to="/portfolio/adoptly" className='port-link'>
                                <h1>Adoptly</h1>
                        </Link>
                                <p>My third project and first group project with General Assembly. For this, we were briefed to 
                                        create an application with a set mission in mind, with an issue we wanted to set out to fix. Step up, Adoptly.
                                </p>
                                <p>Using Python, Django and PostgreSQL, my team and I set out to create an app that helps the user find their 
                                        'pawfect' match with pets up for adoption; in an attempt to give every animal a deserved home.
                                </p>

                                </div>
                                <div className='port-image-container'>
                                        <img className="port-image" src="https://i.imgur.com/MziI0V7.png" draggable="false"/>
                                </div>
                        </div>
                        <div className='project-container cheft-container'>
                                <div className='cheft-details' >
                        <Link to="/portfolio/cheft" className='port-link'>
                                <h1>Cheft</h1>
                        </Link>
                                <p>My fourth and final project during my time with General Assembly was to create an app using React.js for the front end.
                                        We could create a functioning CRUD app, or something which consumes an API.
                                </p>
                                <p>Cheft's purpose is to act as a place for users to store all their recipes, I certainly can't remember them all myself! As 
                                        well as this, the user can share and save other user's recipes, and then meal plan for the week so they can see the 
                                        ingredients needed for their weekly shop.
                                </p>
                                </div>
                                <a href="https://cheft-deploy-028013bc2913.herokuapp.com/?fbclid=IwAR0dAGzHxu_H6ng86rb_xMyUnq6Lzw1SrG0aOB7PPgJdN0cOOoDs4G8UKZM">
                                        <div className='port-image-container'>
                                                <img className="port-image" src="https://i.imgur.com/qsperW2.png" draggable="false"/>
                                        </div>
                                </a>
                        </div>
                </Fade>   
        </div>


    )
}