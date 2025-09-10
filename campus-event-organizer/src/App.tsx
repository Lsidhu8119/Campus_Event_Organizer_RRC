import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css";
import rrcLogo from "./assets/logo.png";

function App() {
  return (
    <div className="app">
      <header>
        <img src={rrcLogo} alt="Red River College Logo" className="logo" />
        <h1>Campus Event Organizer - Red River College</h1>
      </header>

      <main>
        <p>Welcome! Explore upcoming campus events here.</p>
      </main>

      <footer>
        <p>
          <strong>Team: CODING DOCTORS</strong>
        </p>
        <p>Lovedeep Sidhu, Subhpreet Singh, Amandeep Singh</p>
      </footer>
    </div>
  );
}

export default App;