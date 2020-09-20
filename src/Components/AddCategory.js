import React, { useState } from 'react';
import {PropTypes} from 'prop-types';

const AddCategory = ({setcategories}) => {

    const [inputValue, setInputValue] = useState('');


    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.length > 2) {
            setcategories(cats => [inputValue,...cats]);
            setInputValue('');
        }
    }

    return (

        <form onSubmit={handleSubmit}>
        <input
                    type="text"
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



