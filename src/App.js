import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  const [navOpened, setNavOpened] = useState(false);
  const navLinks = ['Home',
    'The Tutor',
    'Dyslexia',
    'The Approach',
    'Sevices',
    'Testimonials',
    'Contact'];

  const burger = React.createRef();
  const sidebar = React.createRef();

  const burgerClick = () => {
    sidebar.current.classList.toggle('nav-active');
    burger.current.classList.toggle('toggle');
    setNavOpened(!navOpened);
  };

  return (
    <React.Fragment>
      <nav>
        <div className="logo">
          <img src="Logo-gradient.png" alt="logo" />
        </div>
        <ul className="nav-links" ref={sidebar}>
          {navOpened
            ? navLinks.map((link, index) => {
              return (
                <li key={index}
                  href="#"
                  style={{
                    animation: `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`
                  }}
                >
                  {link}
                </li>
              );
            })
            : navLinks.map((link, index) => {
              return (
                <li key={index}
                  href="#">{link}</li>
              )
            })}
          {/* <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">The Tutor</a>
          </li>
          <li>
            <a href="#">Dyslexia</a>
          </li>
          <li>
            <a href="#">The Approach</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li> */}
        </ul>
        <div className="burger" ref={burger} onClick={burgerClick}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <div className="home-text">
        <h3 className="home-title">Orton-Gillingham Tutoring</h3>
        <p className="home-description">Online Tutoring providing multi-sensory, individualized, diagnostically driven, prescriptive, direct, and explicit instruction in reading and writing. Orton-Gillingham is an instructional approach intended primarily for use with persons who have difficulty with reading, spelling, and writing of the sort associated with dyslexia and language based learning challenges.</p>
      </div>
    </React.Fragment>
  );
}

export default App;
