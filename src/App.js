import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { Dyslexia } from './components/Dyslexia';
import { Tutor } from './components/Tutor';
import { Home } from './components/Home';

function App() {
  const [navOpened, setNavOpened] = useState(false);
  const navLinks = [
    {
      text: 'Home',
      to: '/'
    },
    {
      text: 'The Tutor',
      to: '/tutor'
    },
    {
      text: 'Dyslexia',
      to: '/dyslexia'
    },
    {
      text: 'The Approach',
      to: '/approach'
    },
    {
      text: 'Sevices',
      to: '/services'
    },
    {
      text: 'Testimonials',
      to: '/testimonials'
    },
    {
      text: 'Contact',
      to: '/contact'
    }];

  const burger = React.createRef();
  const sidebar = React.createRef();

  const burgerClick = () => {
    sidebar.current.classList.toggle('nav-active');
    burger.current.classList.toggle('toggle');
    setNavOpened(!navOpened);
  };

  return (
    <React.Fragment>
      <Router>
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
                    <Link to={link.to} onClick={burgerClick}>{link.text}</Link>
                  </li>
                );
              })
              : navLinks.map((link, index) => {
                return (
                  <li key={index}
                    href="#">
                    <Link to={link.to}>{link.text}</Link>
                  </li>
                )
              })}
          </ul>
          <div className="burger" ref={burger} onClick={burgerClick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/tutor' component={Tutor} />
          <Route path='/dyslexia' component={Dyslexia} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
