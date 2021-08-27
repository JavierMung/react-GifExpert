/**
 * 
 * ESTE COMPONENTE TOMA EL VALOR DEL INPUT Y LO CAMBIA EN TIEMPO REAL
 * RECIBE LAS CATEGORIAS DE LOS ANIMES EN FORMA DE ARREGLO
 * TAMBIÉN RECIBE EL SETCATEGORIES QUE AYUDA A AÑADIR UNA NUEVA CATEGORIA
 * 
 */

import React, {useState} from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories,categories}) => {
    const [inputValue, setinputValue] = useState(''); //HOOK QUE AYUDA A GUARDAR EL VALOR DEL INPUT PARA POSTERIORMENTE MANDARLO AL HOOK DE CATEGORIAS
    const handleInputChange = (e) =>{
        setinputValue(e.target.value);  // GUARDADO DEL INPUT EN EL HOOK
    }

    const handleSubmit = (e)=>{  //METODO QUE AYUDA A PREVENIR INSERCIONES EN BLANCO O REPETICIONES EN EL INPUT
        e.preventDefault(); //EVITA QUE LA PAGINA SE RECARGUE CON CADA INPUT
        //console.log('SubmitHecho');
        if(inputValue.trim().length>2){
            setCategories([inputValue,...categories]); //SE LE AGREGA UNA CATEGORIA AL HOOK, SIEMPRE AL PRINCIPIO
            setinputValue('');
        }

        
    }
    return (                  /// REGRESO DEL COMPONENTE A IMPRIMIR 
        <form onSubmit={handleSubmit}>   {/*  AL PRESIONAR ENTER SE INVOCA AL METODO PARA NO RECARGAR LA PAGINA* */}
            <h1 className="animate_animated animate__shakeX">{inputValue}</h1>
            <input
                type="text"
                value = {inputValue}
                onChange = {handleInputChange} // AL PRESIONAR ENTER SE INVOCA AL METODO PARA CAMBIAR EL VALOR DEL HOOK
                
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
}
