import React from 'react'
import long_image from '../images/google/chicago.jpg'
import tall_image from '../images/google/arch.jpg'
import square_img1 from '../images/google/nunights.jpg'
import square_img2 from '../images/google/solar.jpg' 

const GooglePhotos = () => {

    return (
        <div className='detail-container'>
            <div className='detail-page'>
                <div style={{backgroundColor:"red"}} className='box long-image' >
                    <img src={long_image} alt="Dynasty" className='long-image'/>
                </div>
                <div  style={{backgroundColor:"yellow"}} className='box tall-image' >
                    <img src={tall_image} alt="hot dog crop" className='tall-image'/>
                </div>
                <div style={{backgroundColor:"green"}} className='box square-img1' >
                    <img src={square_img1} alt="face" className='square-img1'/>
                </div>
                <div style={{backgroundColor:"blue"}} className='box square-img2' >
                    <img src={square_img2} alt="diamonds" className='square-img2'/>
                </div>
            </div>
        </div>
    )
}

export default GooglePhotos