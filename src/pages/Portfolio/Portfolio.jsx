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
                                <div className='port-image-container'>
                                        <img className="port-image mastermind-image" src="https://i.imgur.com/bG3vR2a.png" draggable="false"/>
                                </div>
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
                                <div className='port-image-container'>
                                        <img className="port-image" src="https://i.imgur.com/wAKJmpf.png" draggable="false"/>
                                </div>
                        </div>
                        <div className='project-container adoptly-container'>
                                <div className='adoptly-details'>
                        <Link to="/portfolio/adoptly" className='port-link'>
                                <h1>Adoptly</h1>
                        </Link>
                                <p>Project description</p>
                                </div>
                                <div className='port-image-container'>
                                        <img className="port-image" src="https://i.imgur.com/bG3vR2a.png" draggable="false"/>
                                </div>
                        </div>
                        <div className='project-container cheft-container'>
                                <div className='cheft-details' >
                        <Link to="/portfolio/cheft" className='port-link'>
                                <h1>Cheft</h1>
                        </Link>
                                <p>Project description</p>
                                </div>
                                <div className='port-image-container'>
                                        <img className="port-image" src="https://i.imgur.com/qsperW2.png" draggable="false"/>
                                </div>
                        </div>
                </Fade>   
        </div>


    )
}