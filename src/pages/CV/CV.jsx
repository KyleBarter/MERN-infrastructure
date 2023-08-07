import { Fade } from 'react-awesome-reveal'

export default function CV(){
    const timelineExperience = [
        {
            Experience: 'General Assembly Software Engineering immersive',
            date: 'April 2023 - July 2023',
            Summary: 'Summary goes here'
        },
        {
            Experience: 'Employee Benefits Administrator',
            date: 'April 2023 - July 2023',
            Summary: 'Summary goes here'
        },
        {
            Experience: 'Technical Policy Investigator',
            date: 'April 2023 - July 2023',
            Summary: 'Summary goes here'
        },
        {
            Experience: 'General Assembly Software Engineering immersive',
            date: 'April 2023 - July 2023',
            Summary: 'Summary goes here'
        },
        {
            Experience: 'Freelance 2nd Camera assistant',
            date: 'April 2023 - July 2023',
            Summary: 'Summary goes here'
        },

    ]
    return (
        <div className="timeline-container">
            <div className="timeline-line">
                <Fade direction='left'>
                    <div className="experience-left" id="GA">
                        <h1>GA</h1>
                    </div>
                </Fade>
                <Fade direction='right'>
                    <div className="experience-right" id="metlife">
                        <h1>Metlife</h1>
                    </div>
                </Fade>
                <Fade direction='left'>
                    <div className="experience-left" id="uw">
                        <h1>Tech</h1>
                    </div>
                </Fade>
                <Fade direction='right'>
                    <div className="experience-right" id="claims">
                        <h1>Claims</h1>
                    </div>
                </Fade>
                <Fade direction='left'>
                    <div className="experience-left" id="camera">
                        <h1>2nd</h1>
                    </div>
                </Fade>
            </div>
        </div>

    )
}