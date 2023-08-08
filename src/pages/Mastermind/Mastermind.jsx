import { Fade } from 'react-awesome-reveal'

export default function Mastermind(){
    return(
        <>
            <div className="portfolio-show-container">
                <h1>Mastermind </h1>
                <a href="https://kylebarter.github.io/Mastermind/">Deployment</a>
                <a href="https://github.com/KyleBarter/Mastermind">Git</a>
                <h3>Description and brief</h3>
                <p>This was my first project with the General Assembly Software Engineering Immersive course 
                    where we were given just under a week to create a browser game. I opted with Mastermind, 
                    a code breaking game where the player tries to crack the hidden code through guesses and 
                    logical thinking, as this was a game I always used to play with family when I was younger. 
                    I also chose this game as I felt it was the right level of challenge for me at the stage I 
                    was in in my coding journey. I was interested in particular in comparing  the guesses with 
                    the code, so that I could then provide clues to show how close they are to cracking the code.</p>

                <h3>Rules</h3>
                <ul>
                    <li>Code maker (CPU) creates a linear 4 digit code from a choice of 6 colours</li>
                    <li>Code guesser (player) makes an attempt to guess the hidden code</li>
                    <li>Code maker then confirms if the player has guessed any of the following:
                        <ul>
                            <li>Correct colour in incorrect position (marked with a green pin)</li>
                            <li>Correct colour in correct position (marked with an amber pin)</li>
                            <li>Incorrect colours (marked with a red pin)</li>
                        </ul>
                    </li>
                    <li>Code guesser has 10 attempts to crack the code. The twist I’m making for my game is that 
                        the aesthetic will be a bomb defusal game, as such a timer will be set for the player.</li>
                    <li>Player loses if either the time runs out, or they run out of guesses and the bomb detonates</li>
                    <li>Player wins if they guess the correct code</li>
                </ul>
                <h3>Planning</h3>
                <Fade>
                    <div className="portfolio-img-container">
                        <img src="https://i.imgur.com/Whq2gE0.png" />
                    </div>
                </Fade>
            </div>
        </>
    )
}