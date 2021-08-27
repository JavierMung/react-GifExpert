//ARCHIVO QUE HACE LA PETICIÓN DE LOS GIFS A LA PAGINA 
//REGRESA UN ARREGLO CON INFORMACIÓN VALIOSA ACERCA DE LOS GIFS

export const getGifs = async( category )=>{ //SE LE PASA LA CATEGORIA QUE QUEREMOS BUSCAR
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=hRynliJUXXLBjTNvKPGbh5djOozOkEtA` //URL DONDE BUSCARA LOS GIFS
    const resp = await fetch(url); //PETICION A LA PAGINA MEDIANTE EL URL
    const {data} = await resp.json(); // DEVUELVE UNA PROMESA DONDE SE DESESTRUCTURA LA DATA 
    const gifs = data.map((img)=>{    //REGRESAMOS UN ARREGLO DE OBJETOS REFERENTE A LOS GIFS
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url,
        }
     });
    
    return gifs;
}