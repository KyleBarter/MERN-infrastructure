import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { useState, useEffect } from 'react'



export default function CV(){
    useEffect(() => {
        if(window.innerWidth > 550){       
                window.scrollTo({
                        top: 1250,
                        behavior: 'smooth'
                })
        } 
    })
    
    
    const timelineExperience = [
        {
            id: 1,
            experience: 'Software Engineering immersive',
            business: 'General Assembly',
            location: 'Remote',
            date: 'April 2023 - July 2023',
            summary: 'Immersive bootcamp with the award winning General Assembly, covering full stack software development. This course not only expanded my skills as a developer, but also through teaching industry best practices, the CLI, work based problems and using version control systems such as GitHub.'
        },
        {
            id: 2,
            experience: 'Employee Benefits Administrator',
            business: 'MetLife',
            location: 'Brighton',
            date: 'January 2022 - April 2023',
            summary: 'Ensured the renewal process of income protection and group life schemes with businesses were dealt with in a timely manner, as well as answering general queries. Proactively managing and processing accounts for multiple clients, ensuring they were up to date whilst achieving multiple sign offs on processes such as data requests, letters of authority and refunds.'
        },
        {
            id: 3,
            experience: 'Technical Policy Investigator',
            business: 'Markerstudy',
            location: 'Haywards Heath',
            date: 'July 2019 - January 2022',
            summary: 'Reviewed referrals against each product for the criteria and applied these, with ratings, across multiple products including commercial and private vehicles, as well as motorcycles. Requiring a meticulous review of the misrepresentation to give a fair and honest outcome for both the business and the client.'
        },
        {
            id: 4,
            experience: 'Claims Handler',
            business: 'Markerstudy',
            location: 'Haywards Heath',
            date: 'July 2017 - July 2019',
            summary: "Improving the customer journey experience by handling calls and emails, progressing claims. Using strong time management skills to meet targets and KPIs to keep the department's SLA green"
        },
        {
            id: 5,
            experience: '2nd Camera assistant',
            business: 'Freelance',
            location: 'Various',
            date: 'February 2017 - July 2017',
            summary: "Multiple shoots including music videos and short films. These include 'Stealing Silver', 'The Real Target' and 'Radio'. This fast-paced environemnt led to quick problem solving on the spot whilst working efficiently within a small, ever changing team from shoot to shoot."
        }
    ]

    let iconStyle = { background: "#9D4EDD"}
    return (

        <VerticalTimeline
        
        animate= { true }
        lineColor={ 'purple' }
        >
            {
                timelineExperience.map(e => {
                    return (
                        <VerticalTimelineElement
                            key={e.key}
                            iconStyle={ iconStyle }
                            // position={ 'left' }
                        >
                            {/* <p id="description">{e.summary}</p> */}

                                <h3 className='vertical-timeline-element-title'>{e.experience}</h3>
                                <h6>{e.date}</h6>

                                <h5 className='vertical-timeline-element-subtitle'>{e.business}</h5>
                                <h5 className='vertical-timeline-element-subtitle'>{e.location}</h5>
                                <p id="description">{e.summary}</p>
                                <div className='expand'>
                                    <div className='dot'></div>
                                    <div className='dot'></div>
                                    <div className='dot'></div>
                                </div>
                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
    )
}