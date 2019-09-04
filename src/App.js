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
      <div className="home">
        <div className="home-text">
          <h3 className="home-title">Orton-Gillingham Tutoring</h3>
          <p className="home-description">Online Tutoring providing multi-sensory, individualized, diagnostically driven, prescriptive, direct, and explicit instruction in reading and writing. Orton-Gillingham is an instructional approach intended primarily for use with persons who have difficulty with reading, spelling, and writing of the sort associated with dyslexia and language based learning challenges.</p>
          <h4 className="home-dyslexia-title">What is Dyslexia</h4>
          <p className="home-dyslexia-description"><strong>​The International Dyslexia Association and National Institute of Child Health and Human Development defines it as follows:</strong><br />Dyslexia is a specific learning disability that is neurological in origin. It is characterized by difficulties with accurate and/or fluent word recognition and by poor spelling and decoding abilities. These difficulties typically result from a deficit in the phonological component of language that is often unexpected in relation to other cogntivie abilities and the provision of effective classroom instruction. Secondary consequences may include problems in reading comprehension and reduced reading experience that can impede growth of vocabulary and background knowledge.</p>
        </div>
      </div>

      {/* <div className="the-tutor">
        <div className="the-tutor-text">
          <h3 className="the-tutor-title">Georgia Stamos</h3>
          <p className="the-tutor-description">I am a Certified Orton Gillingham Practitioner, providing multi-sensory instruction to children with reading and spelling difficulties. I have received a Masters Degree in General and Special Education and have worked with students in grades 1-6 since 2009, providing individualized instructional support in Reading, Writing, and Math.</p>
        </div>
      </div> */}
    </React.Fragment>
  );
}

export default App;
