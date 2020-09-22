import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const AddCategory = ({ setcategories }) => {

    const [inputValue, setInputValue] = useState('');


    const handleOnChange = (e) => {
        setInputValue(e.target.value);

        console.log('EVENT HANDLE');
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Submitted');
        if (inputValue.length > 2) {
            setcategories(cats => [inputValue, ...cats]);

            console.log('setcategories executed');
            setInputValue('');
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar"
                value={inputValue}
                onChange={handleOnChange}
            />
        </form>

    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}

export default AddCategory;



