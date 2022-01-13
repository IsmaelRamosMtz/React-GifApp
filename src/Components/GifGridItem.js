import React from 'react'

export const GifGridItem = ( img ) => {
    console.log(img);
    return (
        <div className='card animate__animated animate__backInLeft'>
           <img src={img.url.url} alt={img.title} />
           <p>{img.title}</p>
        </div>
    )
}
