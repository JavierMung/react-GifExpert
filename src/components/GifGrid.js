//ESTE COMPONENTE VUELVE A RECIBIR LA DATA PERO CON ELLA ESTABLECE LA KEY DEL COMPONENTE Y TAMBIÉN EL LOADING LO IMPRIME EN PANTALLA 

import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../Helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {  //SE LE PASA LA GATEGORIA OSEA EL NOMBRE DEL ANIME
    
    // const [Images, setImages] = useState([]);
    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category]);
    
   const {data,loading} = useFetchGifs(category); // SE REGRESA EL LOADING Y LA DATA PARA PODER DESESTRURAR LA INFO
   
   

    return (
        <>
            <h3>{category}</h3> 
            {loading && <p>Cargando...</p>}  
            <div  >
                {
                    data.map(img => {  //SE MAPEA LA DATA PRA MANDAR AL COMPONENTE GIFGRIDITEM EL ID DE MI GIF EN LA KEY Y LA DATA DE LA IMAGEN 
                        return(
                           <GifGridItem 
                                key={img.id}  ///**SE LE APLICA LA KEY AL COMPONENTE */
                                {...img} 
                               // img = {img}
                           />
                        )
                    })
                }
                 
                
            </div>
        </>
    )
}
