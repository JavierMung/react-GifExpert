//ESTE COMPONENTE OBTIENE LA DATA DE LOS GIFS POR EL METODO GETGIFS Y REGRESA UN ARREGLO CON LOS DATOS DE LOS 10 GIFS Y VERIFICA SI SE HA HECHO LA PETICION O SIGUE CARGANDO

import { useState, useEffect } from "react";
import {getGifs} from '../Helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({  //HOOK QUE GUARDA LA INFORMACIÓN DE LOS GIFS Y EVALUAR EL LOADING
        data: [],
        loading: true,

    });

    useEffect(() => {     //HOOK PARA QUE SOLO SE REALICE CUANDO SE AGREGUE UN NUEVO ANIME
        getGifs(category) //LLAMADA AL GETGIFS PARA OBTENER LOS DATOS DE LOS GIFS
            .then(imgs => {
                setState({  
                    data:  imgs, //SE LE PASA LA INFO DE LOS GIFS OSEA UN ARREGLO
                    loading: false //SE QUITO EL LOADING QUE ESTABA EN TRUE 
                });
               
            })
    }, [category]);

  

    return state; //SE REGRESA EL HOOK STATE QUE SON LOS DATOS DE LOS GIFS Y EL LOADING 
}