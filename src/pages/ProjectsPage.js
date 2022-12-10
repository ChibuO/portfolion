import React from 'react'
import { Link } from 'react-router-dom';
import ProjectSquare from '../components/ProjectSquare'
import './ProjectsPage.css'

const ProjectsPage = ({ projectsRef, pages, pages2, projectMedia, teamMedia }) => {
  return (
    <div ref={projectsRef} className='projects-page container page'>
      <h1 className='title'>Projects and Activities for "Chibu"</h1>
      <div className='squares-body'>
        <div className='squares-wrap'>
          {projectMedia && pages.map(page => {
            return (
              <Link key={page} to={`/${page}`}><ProjectSquare image={projectMedia[page][0]} /></Link>
            )
          })}
        </div>
        <div className='squares-wrap'>
          {teamMedia && pages2.map(page => {
            return (
              // <Link  key={page} to={`/${page}`}><ProjectSquare image={projectMedia[page][0]} /></Link>
              <ProjectSquare key={page} image={teamMedia[page][0]} />
            )
          })}
        </div>
        <div className='space'></div>
      </div>
    </div>
  )
}

export default ProjectsPage