
let promise = new Promise((resolve, reject)=>{
    //Esto no es un callback ya que corre inmediatamente y no después de algo
    let suma  = 1 + 1
    //Solo por el hecho de ejecutar la función cambia
    //el status
    resolve(suma)
    //reject("Hubo un error")
    
})

promise
    .then((valor)=>{
        //console.log(valor)
        let segundaPromesa = new Promise((res, rej)=>{
            let segunda_suma = valor + 3
            res(segunda_suma)
        })

        //Saco la promesa y puedo continuar con un segundo then
        return segundaPromesa
    })
    .then((valor)=>{
        //console.log(valor)
    })
    .catch((error)=>{
        //console.log(error)
    })

/*
    -Then se ejecuta solo sí finalizó bien
    -Catch si hubo un error

    Promise {} (libre)   promise.then().catch()
    
    .then({Promise}) (adentro) .then({return Promise})

*/

/*
    Se reemplazan estas tres líneas de código por:
    let xhr = new XMLHttRequest
    xhr.open("GET". "url")
    xhr.send()

    -El fetch por defecto es GET
    -Fetch no puede hacer el progreso de subida, con XHR sí

    -El fetch() me da una promesa
    -La ejecución del fetch obtengo un response
    -Con el response puede hacer validaciones, ver los headers y
    transoformar la respuesta
    -Si tengo el response a mano lo que tengo que hacer
        response.json()
        response.blob()
        response.text()
    entre otras.
    -La transformación de un response me da una promesa
    
*/

//PEDIDO ENCADENADO DE FETCH CON UNA SOLA PROMESA
const url = "https://jsonplaceholder.typicode.com"
//Si tengo una promesa libre
fetch(`${url}/users`)
.then((valor)=>{
    //Me da un objeto de tipo response
    //console.log(valor)
    /*
    Tengo distintas transformaciones, acá digo que 
    */
    //console.log(valor.json())
    
    /*
    Me devuelve una promesa, por lo cual la retorno
    para acceder a sus valores
    */
    return valor.json()
})
.then((valor)=>{
    //console.log(valor)
    let usuario = valor[9]
    let id = usuario.id
    
    //Retorno la promesa
    return fetch(`${url}/posts?userId=${id}`)
})
.then((valor)=>{
    return valor.json()
})
.then((valor)=>{
    console.log(valor)
    let post = valor[4]
    let id = post.id
    return fetch(`${url}/comments?postId=${id}`)
})
.then((valor)=>{
    return valor.json()
})
.then((valor)=>{
    console.log(valor)
})
.catch((error)=>{
    console.log(error)
})

