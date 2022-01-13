import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ cat }) => {

    // const [images, setImages] = useState([])
    const { data: images, loading } = useFetchGifs( cat );
    // console.log(data);
    // console.log(loading);

    return (
        <>
            <h3 key={cat}>{cat}</h3>

            { loading ? <p>Cargando....</p> : ''}

            <div className='card-grid'>

                {
                    //    console.log('My images', images),
                    images.map(img => {
                        //    return <li key={img.id}> {img.title} </li>
                        return <GifGridItem
                            key={img.id}
                            img={img}
                            {...img}>
                        </GifGridItem>
                    })
                }
            </div>
        </>
    )
}
