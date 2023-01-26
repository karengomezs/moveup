export const helperHttp = () => {
    //se declara el fetch hacia la API FAKE
    const customFetch = (endpoint, options) =>{
        
        //define cuales son las cabeceras por defecto en este caso solo sera json
        const defaultHeader = {
            accept:"application/json"
        }

        //sirve para cancelar la peticion en caso de demora en la misma. Util para manejar errores
        const controller = new AbortController();
        options.signal = controller.signal;

        //especificamos el metodo por defecto
        options.method = options.method || "GET";

        //especificamos las cabeceras por defecto
        options.headers = options.headers? {...defaultHeader, ...options.headers} : defaultHeader;

        //traducimos el json a cadena string y validamos si es válido
        options.body = JSON.stringify(options.body) || false;
        if(!options.body) delete options.body;

        //visualizacion del evento para efectos internos de validacion dev
        console.log(options)

        //establecemos el evento para abortardespues de 3s de demora
        setTimeout(() => controller.abort(), 3000);

        //retornamos el fetch con las respuestas de error en caso de llegarse a presentar
        return fetch(endpoint, options)
        .then(res => res.ok? res.json() : Promise.reject({
            
                err:true,
                status: res.status || "00",
                statusText: res.statusText || "ha ocurrido un error"
            
        }))
        .catch(err => err);

    }

    //se declaran constantes del CRUD en este caso solo será lectura aunque se colocaran los demás para tener como plantilla
    const get = (url,options = {}) => customFetch(url,options);
    const post = () => {};
    const put = () => {};
    const del = () => {};
    
    
    return(
        null
    )
}