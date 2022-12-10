import React, { useLocation, useEffect } from 'react'
import './Footer.css'
import { FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { SlArrowUp } from 'react-icons/sl'

const Footer = () => {

  //for scrolling to the top of the page
  const backToTop = () => {
    window.scrollTo(0, 0);
  };


  return (
    <div className='footer-outer'>
      <div className='footer container'>
        <div className='contact-side'>
          <h2>Contact!</h2>
          <div className='icon-line'>
            <AiOutlineMail />
            <h2><a href="mailto:023813C@gmail.com" target="blank">023813C@gmail.com</a></h2>
          </div>
          <div className='icon-line'>
            <FaLinkedin />
            <h2><a href="http://linkedin.com/in/chibueze-i-o-2001" target="blank">LinkedIn</a></h2>
          </div>
        </div>
        <div className='name-side'>
          <h2>Chibueze Onyenemezu</h2>
          <div className='to-top-div' onClick={() => backToTop()}>
            <SlArrowUp />
            <h3>Back to Top</h3>
          </div>
        </div>
      </div>
      <div className='footer-bg'></div>
    </div>
  )
}

export default Footer