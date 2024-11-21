import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Team from "./components/Team";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import PlayerDetails from './components/PlayerDetails';
import players from "./data/players";

function App() {
  return (
    <div className="App">
     
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/team" element={<Team players={players} />} />
          <Route path="/team/:playerName" element={<PlayerDetails />} />
          <Route path="/schedule" element={<Schedule/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
