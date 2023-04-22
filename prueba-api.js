const cargarNombres = async() =>{
    try{
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(respuesta);
        if (respuesta.status === 200){
            const datos = await respuesta.json();

            let usuarios = '';
            datos.forEach(usuarios => {
                usuarios = usuarios + "<h1>Hola</h1>"
            });

            document.getElementById('contenedor').innerHTML = usuarios;

        }else if(respuesta.status === 401){
            console.log("pusiste la llave mal");
        
        }else if (respuesta.status === 404){
            console.log("No existe");
        }else{
            console.log("idk broh");
        }


    }catch(error){
        console.log(error)
    }

}

cargarNombres()