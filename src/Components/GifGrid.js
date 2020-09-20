import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const {loading, data: images} = useFetchGifs(category);

    return (
    
        <div className="card-grid">
         
         {loading ?
         <h1>Cargando...</h1>:
         <div>
             {images.map(img => <GifGridItem key={img.id} {...img} />)}
         </div>
         }
        </div>
    )
}
