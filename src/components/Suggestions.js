import React from 'react'
import ProjectSquare from './ProjectSquare'
import './Suggestions.css'

const Suggestions = ({media, pages}) => {
  return (
    <div className='squares-wrap'>
      {media && pages.map(page => {
        return (
          <ProjectSquare key={page} image={media[page][0]} />
        )
      })}
    </div>
  )
}

export default Suggestions