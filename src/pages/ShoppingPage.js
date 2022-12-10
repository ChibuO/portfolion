import React, { useState } from 'react'
import './ShoppingPage.css'
import ImageThumbnail from '../components/ImageThumbnail'
import Suggestions from '../components/Suggestions'
// import { FaGithub } from "react-icons/fa"

const ShoppingPage = ({ pages, page, allmedia, projectData, projectMedia }) => {

  const [selectedImage, setSelectedImage] = useState(0);
  // const [clickedImage, setClickedImage] = useState("");

  const updateSelected = (index) => {
    setSelectedImage(index)
  }

  //{projectMedia[selectedImage].path}

  return (
    <div className='project-page-outer'>
      {projectData &&
        <div className='project-page container'>
          <p id="path"><span className='teal-link'>Home</span> / <span className='teal-link'>Projects</span> / {projectData.name}</p>
          <div className='project-head'>
            <div className='image-side'>
              <figure className='selected-img-wrap'>
                {projectMedia && <img src={require("../"+projectMedia[selectedImage].path)} className='selected-img' alt={projectMedia[selectedImage].tag}></img>}
              </figure>
            </div>
            <div className='sell-side'>
              <h1>{`${projectData.name} (${projectData.subtitle})`}</h1>
              <button className='buy-button'>
                VISIT THE REPO
              </button>
              {/* <FaGithub className='git-icon' /> */}
              <div className='info-div'>
                <p>{projectData.tagline}</p>
                <h3>Details</h3>
                <ul>
                  {projectData.details.map((detail, i) => {
                    return (
                      <li key={i}>{detail}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className='imgs-list'>
            {projectMedia && projectMedia.map((other, index) => {
              return (
                <ImageThumbnail key={index} image={other} onClick={() => updateSelected(index)} isSelected={selectedImage === index} />
              )
            })}
          </div>
          <div className='project-description'>
            <h3>Description</h3>
            {projectData.description.map((paragraph, i) => {
              return (
                <p key={i}>{paragraph}</p>
              )
            })}
          </div>
          <div className='project-suggestions'>
            <hr size="1" color="black" border="1px solid rgb(128, 128, 128)" />
            <h3>You Might Also Like...</h3>
            <Suggestions media={allmedia} pages={pages.filter(current => current !== page)} />
          </div>
          {/* {clickedImage && <Modal clickedImg={clickedImage} />} */}

        </div>}
    </div>
  )
}

export default ShoppingPage