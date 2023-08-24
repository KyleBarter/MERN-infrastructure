import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import { forwardRef, useEffect } from "react"


export default function Portfolio(){
        
        useEffect(() => {
                if(window.innerWidth > 768){       
                        window.scrollTo({
                                top: 1160,
                                behavior: 'smooth'
                        })
                } 
        })


    return (
        <div className="portfolio-container" data-mouse-down-at="0" data-prev-percentage="0">
                <Fade delay={350} up duration={1500}>
                        <div className='project-container mastermind-container'>
                                <div className='mastermind-details'>
                        {/* <Link to="/portfolio/mastermind" className='port-link'> */}
                                <h1>Mastermind</h1>
                        {/* </Link> */}
                                <div className='git-link-container'>
                                <a href="https://github.com/KyleBarter/Mastermind">
                                        <img className="git-link" src="https://i.imgur.com/mIkjkqc.png" />
                                </a>
                                </div>
                                <p>My first project with General Assembly during my Software Engineering Immersive course.</p>
                                <p> We had a week to create a browser game with win / loss logic, in which I opted to create Mastermind.</p>
                                <div className='used-software-container'>
                                        <div className='software-container'>
                                                <img src="https://i.imgur.com/IKbK4gz.png" className='software-img' id="HTML"/>
                                                <span className="software-text">HTML5</span>
                                        </div>
                                        <div className='software-container'>
                                                <img src="https://i.imgur.com/uqRQyO9.png" className='software-img' id="CSS"/>
                                                <span className="software-text">CSS</span>
                                        </div>
                                        <div className='software-container'>
                                                <img src="https://i.imgur.com/dDGV7As.png" className='software-img' id="JS"/>
                                                <span className="software-text">JS</span>
                                        </div>

                                </div>
                                </div>
                                <a href="https://kylebarter.github.io/Mastermind/">
                                        <div className='port-image-container'>
                                                <img className="port-image mastermind-image" src="https://i.imgur.com/bG3vR2a.png" draggable="false"/>
                                        </div>
                                </a>
                        </div>
                        <div className='project-container hours-container'>
                                <div className='hours-details'>
                        {/* <Link to="/portfolio/24hours" className='port-link'> */}
                                <h1>24Hours</h1>
                        {/* </Link> */}
                                <div className='git-link-container'>
                                        <a href="https://github.com/KyleBarter/24hours">
                                                <img className="git-link" src="https://i.imgur.com/mIkjkqc.png" />
                                        </a>
                                </div>
                                <p>The second project with General Assembly, we were briefed to create a CRUD app using 
                                        MongoDB, Node.js and Express. </p>
                                <p>I went with an app which I wanted to create when I first started teaching myself how to
                                        code, a goal planning app to help anyone who might find themselves stuck in a hole they
                                        can't get out of.</p>
                                <div className='used-software-container'>
                                        <div className='software-container'>
                                                <img src="https://i.imgur.com/IKbK4gz.png" className='software-img' id="HTML"/>
                                                <span className='software-text'>HTML5</span>
                                        </div>
                                        <div className='software-container'>
                                                <img src="https://i.imgur.com/uqRQyO9.png" className='software-img' id="CSS"/>
                                                <span className='software-text'>CSS</span>
                                        </div>
                                        <div className='software-container'>
                                                <img src="https://i.imgur.com/lMnU55u.png" className='software-img' id="node"/>
                                                <span className='software-text'>Node</span>
                                        </div>
                                        <div className='software-container'>
                                                <img src="https://i.imgur.com/TE2Ms71.png" className='software-img' id="express"/>
                                                <span className='software-text'>Express</span>
                                        </div>
                                        <div className='software-container'>
                                                <img src="https://i.imgur.com/P4iAuie.png" className='software-img' id="monbgoDB"/>
                                                <span className='software-text'>Mongo DB</span>
                                        </div>
                                        <div className='software-container'>
                                                <img src="https://i.imgur.com/YN50Dag.png" className='software-img' id="oauth"/>
                                                <span className='software-text'>OAuth 2.0</span>
                                        </div>

                                </div>
                                </div>
                                <a href="https://24hours.fly.dev/today">
                                        <div className='port-image-container'>
                                                <img className="port-image" src="https://i.imgur.com/wAKJmpf.png" draggable="false"/>
                                        </div>
                                </a>
                        </div>
                        <div className='project-container adoptly-container'>
                                <div className='adoptly-details'>
                        {/* <Link to="/portfolio/adoptly" className='port-link'> */}
                                <h1>Adoptly</h1>
                        {/* </Link> */}
                                <div className='git-link-container'>
                                        <a href="https://github.com/KyleBarter/Adoptly">
                                                <img className="git-link" src="https://i.imgur.com/mIkjkqc.png" />
                                        </a>
                                </div>
                                <p>My third project and first group project with General Assembly. For this, we were briefed to 
                                        create an application with a set mission in mind, with an issue close to our team's hearts we wanted to set out to fix. Step up, Adoptly.
                                </p>
                                <p>Using Python, Django and PostgreSQL, my team and I set out to create an app that helps the user find their 
                                        'pawfect' match with pets up for adoption; in an attempt to give every animal a deserved home.
                                </p>
                                <div className='used-software-container'>
                                        <div className='software-container'>
                                                <img src="https://i.imgur.com/IKbK4gz.png" className='software-img' id="HTML"/>
                                                <span className='software-text'>HTML5</span>
                                        </div>
                                        <div className='software-container'>
                                                <img src="https://i.imgur.com/uqRQyO9.png" className='software-img' id="CSS"/>
                                                <span className='software-text'>CSS</span>
                                        </div>
                                        <div className='software-container'>
                                                <img src="https://i.imgur.com/dYacXky.png" className='software-img' id="python"/>
                                                <span className='software-text'>Python</span>
                                        </div>
                                        <div className='software-container'>
                                                <img src="https://i.imgur.com/N60EtBO.png" className='software-img' id="django"/>
                                                <span className='software-text'>Django</span>
                                        </div>
                                        <div className='software-container'>
                                                <img src="https://i.imgur.com/gO7ES1a.png" className='software-img' id="postgreSQL"/>
                                                <span className='software-text'>PSQL</span>
                                        </div>
                                        <div className='software-container'>
                                                <img src="https://i.imgur.com/uCXTSvX.png" className='software-img' id="aws"/>
                                                <span className='software-text'>AWS</span>
                                        </div>
                                
                                </div>
                                </div>
                                <a href="https://adoptly-renad.fly.dev/">
                                        <div className='port-image-container'>
                                                <img className="port-image" src="https://i.imgur.com/MziI0V7.png" draggable="false"/>
                                        </div>
                                </a>
                        </div>
                        <div className='project-container cheft-container'>
                                <div className='cheft-details' >
                                        {/* <Link to="/portfolio/cheft" className='port-link'> */}
                                        <h1>Cheft</h1>
                                        {/* </Link> */}
                                        <div className='git-link-container'>
                                                <a href="https://github.com/KyleBarter/cheft">
                                                        <img className="git-link" src="https://i.imgur.com/mIkjkqc.png" />
                                                </a>
                                        </div>
                                        <p>My fourth and final project during my time with General Assembly was to create an app using React.js for the front end.
                                                We could create a functioning CRUD app, or something which consumes an API.
                                        </p>
                                        <p>Cheft's purpose is to act as a place for users to store all their recipes, I certainly can't remember them all myself! As 
                                                well as this, the user can share and save other user's recipes, and then meal plan for the week so they can see the 
                                                ingredients needed for their weekly shop.
                                        </p>
                                        <div className='used-software-container'>
                                                <div className='software-container'>
                                                        <img src="https://i.imgur.com/IKbK4gz.png" className='software-img' id="HTML"/>
                                                        <span className='software-text'>HTML5</span>
                                                </div>
                                                <div className='software-container'>
                                                        <img src="https://i.imgur.com/uqRQyO9.png" className='software-img' id="CSS"/>
                                                        <span className='software-text'>CSS</span>
                                                </div>
                                                <div className='software-container'>
                                                        <img src="https://i.imgur.com/P4iAuie.png" className='software-img' id="mongoDB"/>
                                                        <span className='software-text'>Mongo DB</span>
                                                </div>
                                                <div className='software-container'>
                                                        <img src="https://i.imgur.com/TE2Ms71.png" className='software-img' id="exoress"/>
                                                        <span className='software-text'>Express</span>
                                                </div>
                                                <div className='software-container'>
                                                        <img src="https://i.imgur.com/RYP0JR8.png" className='software-img' id="react"/>
                                                        <span className='software-text'>React</span>
                                                </div>
                                                <div className='software-container'>
                                                        <img src="https://i.imgur.com/lMnU55u.png" className='software-img' id="node"/>
                                                        <span className='software-text'>Node</span>
                                                </div>
                                                <div className='software-container'>
                                                        <img src="https://i.imgur.com/bATizxl.png" className='software-img' id="JWT"/>
                                                        <span className='software-text'>JWT</span>
                                                </div>
                                                <div className='software-container'>
                                                        <img src="https://i.imgur.com/w9Sl2Ji.png" className='software-img' id="tableplus"/>
                                                        <span className='software-text'>Table Plus</span>
                                                </div>
                                                <div className='software-container'>
                                                        <img src="https://i.imgur.com/BhfJEwG.png" className='software-img' id="postman"/>
                                                        <span className='software-text'>Postman</span>
                                                </div>

                                        </div>
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

