import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  #logo {
    max-width:40px;
    height:auto;
  }
  .navbar-brand {
    margin: auto;
  }
  .navbar {
    background-color: #8B9492;
  }
`;

function App() {
  return (
    <React.Fragment>
      <Styles>
        <Navbar bg="light" light expand="md" sticky="top" className="bg-white justify-content-center">
          <Navbar.Brand href="#" className="align-items-center">
            <img id="logo" src="logo.png" alt="Logo" />
          </Navbar.Brand>
        </Navbar>
        <Navbar bg="light" light expand="md" sticky="top" className="bg-white justify-content-center navbar-static-top navbar-lower">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="align-items-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">The Tutor</Nav.Link>
              <Nav.Link href="#">Dyslexia</Nav.Link>
              <Nav.Link href="#">The Approach</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Testimonials</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Jumbotron />
        {/* <nav className="navbar navbar-expand-md bg-light navbar-light sticky-top border-bottom border-gray bg-white">
          <div className="d-flex">
            <a href="#" className="navbar-brand">
              <img id="logo" src="logo.png" alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">The Tutor</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Dyslexia</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">The Approach</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Services</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Testimonials</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
        <Layout>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </Router>
        </Layout>
      </Styles>
    </React.Fragment>
  );
}

export default App;
