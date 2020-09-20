import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types'


const GifGrid = ({ category }) => {

    const {loading, data: images} = useFetchGifs(category);

    return (
    
        <div className="card-grid">
         
         {loading ?
         <h1>Cargando...</h1>:
         <>
             {images.map(img => <GifGridItem key={img.id} {...img} />)}
         </>
         }
        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;