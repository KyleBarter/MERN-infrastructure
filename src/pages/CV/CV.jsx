import { Fade } from 'react-awesome-reveal'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

export default function CV(){
    const timelineExperience = [
        {
            id: 1,
            experience: 'Software Engineering immersive',
            business: 'General Assembly',
            location: 'Remote',
            date: 'April 2023 - July 2023',
            summary: 'Summary goes here'
        },
        {
            id: 2,
            experience: 'Employee Benefits Administrator',
            business: 'MetLife',
            location: 'Brighton',
            date: 'January 2022 - April 2023',
            summary: 'Summary goes here'
        },
        {
            id: 3,
            experience: 'Technical Policy Investigator',
            business: 'Markerstudy',
            location: 'Haywards Heath',
            date: 'July 2019 - January 2022',
            summary: 'Summary goes here'
        },
        {
            id: 4,
            experience: 'Claims Handler',
            business: 'Haywards Heath',
            location: 'Remote',
            date: 'July 2017 - July 2019',
            summary: 'Summary goes here'
        },
        {
            id: 5,
            experience: '2nd Camera assistant',
            business: 'Freelance',
            location: 'Various',
            date: 'February 2017 - July 2017',
            summary: 'Summary goes here'
        },

    ]
    return (
        // <div className="timeline-container">
        //     <div className="timeline-line">
        //         <Fade direction='left'>
        //             <div className="experience-left" id="GA">
        //                 <h1>GA</h1>
        //             </div>
        //         </Fade>
        //         <Fade direction='right'>
        //             <div className="experience-right" id="metlife">
        //                 <h1>Metlife</h1>
        //             </div>
        //         </Fade>
        //         <Fade direction='left'>
        //             <div className="experience-left" id="uw">
        //                 <h1>Tech</h1>
        //             </div>
        //         </Fade>
        //         <Fade direction='right'>
        //             <div className="experience-right" id="claims">
        //                 <h1>Claims</h1>
        //             </div>
        //         </Fade>
        //         <Fade direction='left'>
        //             <div className="experience-left" id="camera">
        //                 <h1>2nd</h1>
        //             </div>
        //         </Fade>
        //     </div>
        // </div>
        <VerticalTimeline>
            {
                timelineExperience.map(e => {
                    return (
                        <VerticalTimelineElement
                            key={e.key}
                            date={e.date}
                        >
                            <h3 className='vertical-timeline-element-title'>{e.experience}</h3>
                            <h5 className='vertical-timeline-element-subtitle'>{e.business}</h5>
                            <h5 className='vertical-timeline-element-subtitle'>{e.location}</h5>
                            <p id="description">{e.summary}</p>

                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
    )
}