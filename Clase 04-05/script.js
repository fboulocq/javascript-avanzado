//Uso del forEach

// let array = [1,2,3,4,5]

// for(let i = 0; i < array.length; i++)
// {
//     let indice = i
//     let elemento = array[i]
//     console.log("En el índice " + indice + " está el elemento " + elemento)
// }

/*
-Lleva un parámetro una función, un callback

*/
//let foo = () => {}
//array.forEach(foo)
//array.forEach(()=>{})

// array.forEach((elemento, indice)=>{
//     console.log("En el índice " + indice + " está el elemento " + elemento)
// })

// let btn = document.querySelector("button")
// btn.addEventListener("click", )


//REGET
// let value = "1234"
// let regex = /[a-z]\s/

// console.log(regex.test(value))


/*
Tres pasos fundamentales para usar AJAX

1-Crear un objeto del tipo XHR
2-Configurar el objeto XHR
3-Enviar el pedido

-La propiedad readystate de XHR nos idce en que estado se
encuentra el pedido. Son los siguientes.
    -0 inicialización de XHR / aborto de un pedido(request)
    -1 el objeto XHR está configurado
    -2 los headers se enviaron y recibieron
    -3 descargando informaciòn
    -4 pedido finalizado
    

-readystatechange: se dispara cada vez que la propiedad
readystate cambia.

-Cuando se envía la respuesta, en el xhr
va a estar en response, todo el contenido de lo que
obtengo etc

-load: se dispara cuando terminó el pedido

-Mètodos HTTP:
    GET: para pedir
    POST: para enviar / crear
    PUT: para reemplazar
    PARCH: para editar
    DELETE: para borrar
*/
// setTimeout(()=>{
//     console.log("Estoy primero")
// }, 5000)

//1
// let xhr = new XMLHttpRequest
// //2
// xhr.addEventListener('readystatechange', ()=>{
//     console.log("Nuevo estado: " + xhr.readyState)

//     if(xhr.readyState === 4 && xhr.status === 200)
//     {
//         console.log(xhr.response)
//     }
// })
// xhr.open("GET","info.txt")
// //3
// xhr.send()

////

let btn = document.querySelector('button')

btn.addEventListener('click', () => {
    let xhr = new XMLHttpRequest
    xhr.addEventListener('readystatechange', () => {
        console.log("Nuevo estado: " + xhr.readyState)
        //Todavía no descargué el archivo, puedo obtener información antes de mostrar en pantalla
        if(xhr.readyState === 2)
        {
            //Obtengo todos los headers
            //let headers = xhr.getAllResponseHeaders();
            //console.log(headers);

            //Obtengo los headers que quiero
            let tipoArchivo = xhr.getResponseHeader("content-type")
            
            console.log(tipoArchivo)
            
            // if(tipoArchivo != "image/jpg")
            // {
            //     //Cancelo todo porque no sería lo que esperaba
            //     xhr.abort()
            // }

            
        }
    })

    //Sabemos que el status va a ser 4, por eso lo sacamos
    //de la condición
    xhr.addEventListener('load', () =>{
        if (xhr.status === 200) 
        {
            let contenido = xhr.response
            let p = document.createElement("p")
            //p.innerText = contenido
            p.innerHTML = contenido
            document.body.appendChild(p)
        }
    })

    xhr.addEventListener('abort', ()=>{
        console.log("Solicitud cancelada")
        console.log(xhr)
    })

    //xhr.open("GET", "info.txt")
    xhr.open("GET", "plantilla.html")
    xhr.send()
})