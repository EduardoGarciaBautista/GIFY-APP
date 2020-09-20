import React from 'react';
import PropTypes from 'prop-types'

export const GifGridItem = ({title, id, url}) => {

    return (
        <div className="card animate__fadeIn">
            <img src={url} alt={title}/>
            <p>
                {title}
            </p>
        </div>
    )
}
GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}