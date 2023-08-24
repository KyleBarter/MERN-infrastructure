import { useEffect } from "react"

export default function Photography(){
    useEffect(() => {
        if(window.innerWidth > 768){       
                window.scrollTo({
                        top: 1160,
                        behavior: 'smooth'
                })
        } 
    })
    
    return (
        <>
            <div className="photog-container">
                <div className="photography">
                    <img src="https://i.imgur.com/y9cBpIJ.jpg" />
                    <span className="photo-text">Seville, Spain</span>
                </div>
                <div className="photography">
                    <img src="https://i.imgur.com/kTN6FJd.jpg" />
                    <span className="photo-text">Vienna, Austria</span>
                </div>
                <div className="photography">
                    <img src="https://i.imgur.com/rB7IKfG.jpg" />
                    <span className="photo-text">Seville, Spain</span>
                </div>
                <div className="photography">
                    <img src="https://i.imgur.com/MQ4O1nF.jpg" />
                    <span className="photo-text">Hallstatt, Austria</span>
                </div>

                <div className="photography">
                    <img src="https://i.imgur.com/BGl97zf.jpg" />
                    <span className="photo-text">Seville, Spain</span>
                </div>
                <div className="photography">
                    <img src="https://i.imgur.com/A7Cc40T.jpg" />
                    <span className="photo-text">Tromso, Norway</span>
                </div>
                <div className="photography">
                    <img src="https://i.imgur.com/9M8S7VR.jpg" />
                    <span className="photo-text">Vienna, Austria</span>
                </div>
                <div className="photography">
                    <img src="https://i.imgur.com/4Ni93OZ.jpg" />
                    <span className="photo-text">Copenhagen, Denmark</span>
                </div>

                <div className="photography">
                    <img src="https://i.imgur.com/YfjfhSc.jpg" />
                    <span className="photo-text">Tromso, Norway</span>
                </div>
                <div className="photography">
                    <img src="https://i.imgur.com/xoHunE6.jpg" />
                    <span className="photo-text">Seville, Spain</span>
                </div>
                <div className="photography">
                    <img src="https://i.imgur.com/LDjnXdE.jpg" />
                    <span className="photo-text">Ljubljana, Slovenia</span>
                </div>
                <div className="photography">
                    <img src="https://i.imgur.com/oSre1hS.jpg" />
                    <span className="photo-text">The Lake District, UK</span>
                </div>

                <div className="photography">
                    <img src="https://i.imgur.com/GNvKO1t.jpg" />
                    <span className="photo-text">Helsinki, Finland</span>
                </div>
                <div className="photography">
                    <img src="https://i.imgur.com/TT00yOe.jpg" />
                    <span className="photo-text">Malmo, Sweden</span>
                </div>
                <div className="photography">
                    <img src="https://i.imgur.com/auORVLE.jpg" />
                    <span className="photo-text">Ljubljana, Slovenia</span>
                </div>
                <div className="photography">
                    <img src="https://i.imgur.com/1XvtjZC.jpg" />
                    <span className="photo-text">Vienna, Austria</span>
                </div>

                <div className="photography">
                    <img src="https://i.imgur.com/NDi7GpZ.jpg"  />
                    <span className="photo-text">Marsaxlokk, Malta</span>
                </div>
                <div className="photography">
                    <img src="https://i.imgur.com/OD2YoFw.jpg"  />
                    <span className="photo-text">Stockholm, Sweden</span>
                </div>
                <div className="photography">
                    <img src="https://i.imgur.com/GR7B9si.jpg"  />
                    <span className="photo-text">Lake Bled, Slovenia</span>
                </div>
                <div className="photography">
                    <img src="https://i.imgur.com/wCOx5zA.jpg"  />
                    <span className="photo-text">Mdina, Malta</span>
                </div>

                <div className="photography">
                    <img src="https://i.imgur.com/7owkLJO.jpg"  />
                    <span className="photo-text">Seville, Spain</span>
                </div>
                <div className="photography">
                    <img src="https://i.imgur.com/5y7KGiv.jpg"  />
                    <span className="photo-text">Helsinki, Finland</span>
                </div>
                <div className="photography">
                    <img src="https://i.imgur.com/VeltBt9.jpg"  />
                    <span className="photo-text">Malmo, Sweden</span>
                </div>
                <div className="photography">
                    <img src="https://i.imgur.com/QqYymep.jpg"  />
                    <span className="photo-text">Stockholm, Sweden</span>
                </div>
            </div>
        </>

    )
}