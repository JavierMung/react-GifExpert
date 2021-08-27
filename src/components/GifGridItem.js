//ESTE COMPONENTE IMPRIME LOS GIFS GRACIAS AL URL Y EL TITULO DEl MISMO

import React from 'react'

export const GifGridItem = ({id,title,url}) => {
    
    return (
       
        <div className = 'boxImages'>
           <img src={url} alt={title} className="animate__animated animate__rubberBand"></img>
           <p>{title}</p>
        </div>
    )
}
