import React from 'react'


export default function Image({pic}) {
   
    return (
        <div className="imageContainer">
            <img className='image'src={pic} alt="Image of Current Bird" />
        </div>
    )
}
