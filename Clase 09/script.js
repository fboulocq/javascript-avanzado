//PEDIDO ENCADENADO DE FETCH CON MUCHAS PROMESAS

const url = "https://jsonplaceholder.typicode.com"
//Si tengo una promesa libre
// fetch(`${url}/users`)
// .then((valor)=>{
   
//     return valor.json()
// })
// .then((valor)=>{
//     //console.log(valor)
//     let usuario = valor[9]
//     let id = usuario.id
    
//     //Retorno la promesa
//     return fetch(`${url}/posts?userId=${id}`)
// })
// .then((valor)=>{
//     return valor.json()
// })
// .then((valor)=>{
//     console.log(valor)
//     let arrayDeFetch = []
//     valor.forEach((post)=>{
//         let id = post.id
//         //Es un array de promesas
//         arrayDeFetch.push(fetch(`${url}/comments?postId=${id}`))
//     })
//     return Promise.all(arrayDeFetch);
// })
// .then((valor)=>{
//     let arrayDeResponse = []
//     valor.forEach((response)=>{
//         arrayDeResponse.push(response.json())
//     })
//     return Promise.all(arrayDeResponse)
// })
// .then((valor)=>{
//     console.log(valor)
// })
// .catch((error)=>{
//     console.log(error)
// })


/*
    1-Forma abreviada si toma un solo parámetro, podemos quitar los
    paréntesis
    2-S el cuerpo de la función lo único que hace es retornar una expresión
    puedo obviar la palabra retorno y las llaves. Reducir el cuerpo de la función
    a una mínima expresión
*/
//1
let a = function(item) {}
let a = item => {}

//2
let a = function(item) 
{   
    let resultado = item * 2
    return resultado
}
let a = item => item * 2


//Ejemplo ternario
let a = function(item)
{
    if(item > 5)
    {
        return item * 2
    }
    else
    {
        return item
    }
}

let a = item => item > 5 ? item * 2 : item

//Función MAP
let array = [1, 2, 3]
array.forEach((elemento, indice) =>{ "no puedo retornar"}) //da VOID

//obtengo un array de copiar a medida que la voy mapeando
array.map((elemento, indice) =>{ "tengo que retornar"}) // da Array

//Con fetch de forma reducida

fetch(`${url}/users`)
.then(valor => valor.json())
.then(valor => fetch(`${url}/posts?userId=${valor[9].id}`))
.then(valor => valor.json())
.then(valor => Promise.all(valor.map(post => fetch(`${url}/comments?postId=${post.id}`))))
.then(valor => Promise.all(valor.map(response => response.json())))
.then((valor)=>{
    console.log(valor)
})
.catch((error)=>{
    console.log(error)
})

/////////////
let a = {y: false}
a.x = true
console.log(a)

//Arguments
// function foo()
// {
//     console.log(arguments)
//     if(arguments.length > 3)
//     {
//         //.... pasa tal cosa
//     }
//     else
//     {
//         //....otra cosa
//     }
// }

// foo(1,2,3)

//Ámbito:
/*
    -Foo puede llegar a A, a B y a C que está
    dentro de la función.
*/
// let a = true
// function foo(b)
// {
//     let c = 2
// }
// foo(1)

let a = 1
function externa()
{
    let c = true
    let interna = function (){
        let d = false
        console.log(a)
        console.log(d)
        console.log(c)
    }
    return interna
}

let resultado = externa()
//A partir de esta línea, adentro de externa, C y Interna se borraron
externa()
