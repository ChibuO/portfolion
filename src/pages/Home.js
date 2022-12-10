import React from 'react'
// import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage'
import ProjectsPage from './ProjectsPage'
import projectImages from '../resources/project_images.json'
import teamImages from '../resources/team_images.json'

const Home = ({aboutRef, projectsRef}) => {

  const pages = ["elf-bot", "money_tracker", "tv_tracker", "crisis"]
  const pages2 = ["solarcar", "robotics", "nunights"]

  return (
    // <Routes>
    //   <Route path="/" exact element={LandingPage}></Route>
    //   <Route exact path='/about' element={<AboutPage />}></Route>
    //   {projectImages && <Route exact path="/projects_and_activities" element={<ProjectsPage  pages={pages} projectMedia={projectImages}/>}></Route>}
    // </Routes>

    <div className='home-page'>
      <LandingPage />
      <AboutPage id="about" aboutRef={aboutRef} />
      {projectImages && <ProjectsPage id="projects" projectsRef={projectsRef} pages={pages} pages2={pages2} projectMedia={projectImages} teamMedia={teamImages} />}
    </div>

  )
}

export default Home