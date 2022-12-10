import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = ({ navRef, moveBar, scrollDown, aboutRef, projectsRef }) => {

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
      <div ref={navRef} className='navbar-wrap'>
        <div className='navbar container'>
          <h3 onClick={() => scrollDown(aboutRef)}>ABOUT</h3>
          <h3 onClick={() => scrollToBottom()}>CONTACT</h3>
          <h3><Link to="/">CHIBU</Link></h3>
          <h3 onClick={() => scrollDown(projectsRef)}>PROJECTS</h3>
          <h3><a href="https://drive.google.com/file/d/1qmAVEf_EP5jWGvwrgn3Sl64JmU-fyhq5/view?usp=share_link" target="blank">RESUME</a></h3>
        </div>
      </div>

  )
}

export default NavBar