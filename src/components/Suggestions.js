import React from 'react'
import { Link } from 'react-router-dom';
import ProjectSquare from './ProjectSquare'
import './Suggestions.css'

const Suggestions = ({media, pages}) => {
  return (
    <div className='squares-wrap'>
      {media && pages.map(page => {
        return (
          <Link key={page} to={`/${page}`}><ProjectSquare image={media[page][0]} /></Link>
        )
      })}
    </div>
  )
}

export default Suggestions