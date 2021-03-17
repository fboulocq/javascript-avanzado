/*
-API REST: (Representational State Transfer), se pide a un sevidor.
Se hace un request y nos da un response con un objeto XML o JSON.
Ejemplo: se hace una petición a un web que tiene una capa de base de datos con sql o mongo db y este
devuelve a PHP la info de productos, lo que se hace es "transformar" esos datos en JSON
para ser enviados como respuesta.

1-Identificar qué servicio queremos consumir
2-Cuando sabemos a qué servicio, buscar la documentación
3-URL, métodos y formatos. Qué tengo que enviar y qué voy a recibir.

*/

// let xhr = new XMLHttpRequest;
// //Config de AJAX - por defecto viene text
// //Ahora el xhr.response va a ser por defecto JSON
// xhr.responseType = "json";
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.addEventListener('load', () =>{
//     if(xhr.status == 200){
//         //Las respuestas de AJAXS siempre vienen en formato string
//         //console.log(xhr.response);
//         //console.log(typeof xhr.response)

//         //let respuestaJSON = JSON.parse(xhr.response);
//         //console.log(respuestaJSON);
//         //console.table(respuestaJSON);

//         //console.table(xhr.response);
//         let arrayResponse = xhr.response;
//         //por cada usuario que haya en el response...
//         /*
//         -creo un fragmento para al finalizar el foreach le hago
//         append al body
//         */
//         let fragmento = document.createDocumentFragment();
//         arrayResponse.forEach((usuario) =>{
//             let p = document.createElement("p");
//             p.innerText = usuario.name;
//             //body.appendChild(p);
//             fragmento.appendChild(p);

//         });
//         document.body.appendChild(fragmento);
//     };
// });
// xhr.send();

/////////OBTENER LA UBICACIÓN

//No funciona sin la aprobación del usuario
// navigator.geolocation.getCurrentPosition((ubicacion)=>{
//     //console.log(ubicacion)
//     let lat = ubicacion.coords.latitude
//     let lon = ubicacion.coords.longitude
    
//     let xhr = new XMLHttpRequest()
//     xhr.responseType="json"
//     xhr.open("GET", `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=jsonv2`)
//     xhr.addEventListener('load', () =>{
//         if(xhr.status===200)
//         {
//             //console.log(xhr.response)
//             //console.log(xhr.response.address)
//             let p = document.createElement("p")
//             p.innerText = xhr.response.display_name
//             document.body.appendChild(p)
//         }
//     })
//     xhr.send()
// })

///////OBTENER UNA IMAGEN

/*
-Progress: viene con algunas propiedades.
    -event.lenghtCumputable: me retorna un boleano. Nos dice si el header content-lenght nos vino
    -event.loaded: me retorna un número. Nos dice la cantidad de bytes descargado
    -event.total: number. Nos dice la cantidad de bytes que hay que descargar

*/
let p = document.createElement("p")
let barra = document.getElementById("barraProgreso2")
let xhr = new XMLHttpRequest()
xhr.open("GET", "coeteMobible.png")
//Me aseguro que la respuesta sea Blob
xhr.responseType="blob"
xhr.addEventListener("progress", (evento)=>{
    //Chunk - buffer (cada porción que se descarga)
    if(evento.lengthComputable)
    {
        //let porcentaje = evento.total - evento.loaded
        let porcentaje = (evento.loaded * 100) / evento.total
        console.log(porcentaje)
        
        p.innerText = Math.round(porcentaje)
        document.body.appendChild(p)

        //barra.innerText=Math.round(porcentaje)
        barra.innerText=porcentaje.toFixed(2);
        //barra.style=`width:${Math.round(porcentaje)}%`
        barra.style.width=`${porcentaje}%`;
        
    }
    else
    {
        /*
            Si el header-lenght no vino
            acá podría mostrar un gif de tiempo indeterminado
        */
       
    }
})

xhr.addEventListener("load", () =>{
    console.log("Terminó")
    p.innerText="¡Terminó!"
       setTimeout(()=>{
            p.innerText=""
        }, 2000)
    barra.style.width = ""
    
    //Me guardo el response en formato blob
    let blob = xhr.response
    //Me creo una url temporal y le paso el blob
    let url = URL.createObjectURL(blob)
    console.log(url)
    
    //let imagen = document.createElement("img")
    //imagen.src=url
    //document.body.appendChild(imagen)

    let a = document.createElement("a")
    a.href=url
    //a.target="_blank"
    a.download="imagen";
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

})
xhr.send()