import React from 'react'
import './AboutPage.css'
import { GoSearch } from 'react-icons/go'
import GooglePhotos from './GooglePhotos'

const AboutPage = ({ aboutRef }) => {
  return (
    <div ref={aboutRef} id="plese" className='about-page container page'>
      <div className='search-box'>
        <p>Chibu</p>
        <GoSearch id="search-icon" />
      </div>

      <hr size="1" color="#3c4043" border="1px solid rgb(128, 128, 128)" />

      <p id="search-p">Search Results for "Chibu"</p>

      <div className='split-screen'>
        <div className='links-side'>
          <h4>Education - Northwestern University</h4>
          <p>BS Computer Engineering - Class of '23</p>
          <blockquote style={{ border: "none" }}>
            <h4>Solar Car Team - Software Lead</h4>
            <p>Telemetry for an eco-friendly car</p>
            <br />
            <h4>Robotics Club</h4>
            <p>Autonomous robots</p>
            <br />
            <h4>NU Nights - President</h4>
            <p>Late night student programming</p>
          </blockquote>
          <h4><a href="https://drive.google.com/file/d/1qmAVEf_EP5jWGvwrgn3Sl64JmU-fyhq5/view?usp=share_link" target="blank">Resume (pdf)</a></h4>
          <p>Background, skills, and accomplshments</p>
          <br />
          <h4><a href="http://linkedin.com/in/chibueze-i-o-2001" target="blank">LinkedIn</a></h4>
          <p>Computer Engineering Student at Northwestern University</p>
          <br />
          <h4><a href="mailto:023813C@gmail.com" target="blank">Email - 023813C@gmail.com</a></h4>
          <p>Available 24/7</p>
        </div>

        <div className='info-side'>
          <h3>Chibueze Onyenemezu</h3>
          <p>Software Engineer</p>
          <GooglePhotos />
          <p id="blurb">I love to build and create. Whether it's a program or a painting, I enjoy conceptualizing the final product, then spending hours working, researching, and tweaking until I can bask in the glow of my completed vision.</p>
          <br />
          <p><b>Interests: </b>Reading, Graphic Design, Drawing, TV & Movies, Comics</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage