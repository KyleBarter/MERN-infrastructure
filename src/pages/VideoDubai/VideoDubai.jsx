import { Container } from 'react-bootstrap'

export default function VideoDubai(){

    return(
    <Container>
        <div className='video-container'>
            <iframe width="853" height="480" src="https://www.youtube.com/embed/U0B6ddcNTkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    </Container>
    )
}