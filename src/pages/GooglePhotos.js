import React from 'react'

const GooglePhotos = () => {

    const long_image = process.env.PUBLIC_URL + '/images/google/chicago.jpg'
    const tall_image =  process.env.PUBLIC_URL + '/images/google/arch.jpg'
    const square_img1 =  process.env.PUBLIC_URL + '/images/google/nunights.jpg'
    const square_img2 =  process.env.PUBLIC_URL + '/images/google/solar.jpg'

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