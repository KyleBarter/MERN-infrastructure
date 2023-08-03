import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import LoginForm from '../LoginForm/LoginForm';
import NavBar from '../../components/NavBar/NavBar';
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio';
import Photography from '../Photography/Photography';
import VideoEditing from '../VideoEditing/VideoEditing.jsx';
import CV from '../CV/CV';
import Contact from '../Contact/Contact';
import Mastermind from '../Mastermind/Mastermind';
import Hours from '../24hours/24hours'
import Adoptly from '../Adoptly/Adoptly';
import Cheft from '../Cheft/Cheft';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
          <>
            <About />
            <NavBar user={user} setUser={setUser}/>
            <Routes>
              {/* Route components in here */}
              <Route path="/portfolio" element={<Portfolio/>} />
              <Route path="/photography" element={<Photography/>} />
              <Route path="/videos" element={<VideoEditing/>} />
              <Route path="/cv" element={<CV/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/portfolio/mastermind" element={<Mastermind/>} />
              <Route path="/portfolio/24hours" element={<Hours/>} />
              <Route path="/portfolio/adoptly" element={<Adoptly/>} />
              <Route path="/portfolio/cheft" element={<Cheft/>} />
            </Routes>
          </>
    </main>
  );
}
