import React from 'react';
import PropTypes from 'prop-types'

export const GifGridItem = ({ title, id, url }) => {

    return (
        <div className="card animate__fadeIn" id="card">
            <div className="img-container">
                <img src={url} alt={title} />
            </div>
            <div className="footer-contet">
                <p>
                    {title}
                </p>
            </div>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}