import React from 'react';

export const GifGridItem = ({title, id, url}) => {

    return (
        <div className="card animate__fadeIn">
            <img src={url}/>
            <p>
                {title}
            </p>
        </div>
    )
}
