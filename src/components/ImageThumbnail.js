import React from 'react'

// css in ShoppingPage

const ImageThumbnail = ({image, onClick, isSelected}) => {
  return (
    <figure className={`other-img-wrap ${isSelected === true ? "other-img-wrap-selected" : ""}`} onClick={onClick}>
      {image && <img src={image.path} className='other-img' alt={image.tag}></img>}
    </figure>
  )
}

export default ImageThumbnail