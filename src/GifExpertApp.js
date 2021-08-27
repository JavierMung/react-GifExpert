import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


//COMPONENTE
export const GifExpertApp = ()=>{ 
   // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
   const [categories, setCategories] = useState(['Dragon Ball']);
//    const handleAdd = ()=>{ 
//         setCategories([...categories, 'Naruto']);
//     } 

    //setCategories puede tener un callback el cual tiene un argumento que es el valor del estado anterior
    /**
     * setCategories(cats => [...cats,'Naruto']);
     * 
     */
   

   return (
        <>
            <h2 className="animate__animated animate__slideInLeft">GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} categories = {categories}/> {/**COMPONENTE PARA AGREGAR ANIME AL HOOK CATEGORIA  */}
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol >  {/**LISTA ORDENADA DE LOS ANIMES */}
                {
                    categories.map( category => ( //SE REALIZA UN MAPEAADO AL HOOK PARA PASAR CADA ELEMENTO AL GIF GRID
                        <GifGrid
                            key = {category}
                            category = {category}
                        />
                    ) )
                }
            </ol>
        </>


    )


 }