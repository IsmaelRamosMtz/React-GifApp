import React, { useState } from 'react'
import PropTypes from 'prop-types'



export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        // Evita refresh de la pagina
        e.preventDefault();
        // console.log('Submit hecho');

        if(inputValue.trim().length > 2){
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        }

    }

    return (
        // El form agrupa todos los elementos
        <form onSubmit={handleSubmit}>
            <h1>El gif que estas buscando es: {inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange} />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
