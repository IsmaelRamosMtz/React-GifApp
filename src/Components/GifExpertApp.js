import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    
    // const handleAdd = () => {
    //     const newAnime = 'HXH';
    //     // Agregar un nuevo elemento
    //     setCategories( oldCategories => [...oldCategories, newAnime])
    // }

    return (
        <div>
            <h2> Gifs-App</h2>
            <AddCategory setCategories = { setCategories } />
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                {
                    // categories.map(cat => {
                    //     return <li key={ cat }>{ cat }</li>
                    // })
                    categories.map ( cat => (
                       <GifGrid key={ cat }
                                cat = { cat }></GifGrid> 
                    ))
                }
            </ol>
        </div>
    )
}
