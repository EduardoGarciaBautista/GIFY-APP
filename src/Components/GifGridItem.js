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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L34.3,117.3C68.6,107,137,85,206,117.3C274.3,149,343,235,411,256C480,277,549,235,617,229.3C685.7,224,754,256,823,261.3C891.4,267,960,245,1029,240C1097.1,235,1166,245,1234,234.7C1302.9,224,1371,192,1406,176L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            </div>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}