import React from 'react'

//  css in shopping page

const ProjectSquare = ({ image, onClick }) => {
  return (
    <div className='square-wrap' onClick={onClick}>
      {image &&
        <div className='square'>
          <div className='square-img-wrap'>
            <img src={require("../"+image.path)} className='square-img' alt={image.tag}></img>
          </div>
          <h2 className='image-name'>{image.ptitle}</h2>
        </div>
      }
    </div>
  )
}

export default ProjectSquare