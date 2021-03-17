/*
-Si vamos con F12 --> a Perfomance y le damos Play, recargamos un lugar
en específico y después Stop. Vemos cómo es la performance de la web con
el código que tenés puesto.
    
    -Rendering: cuánto tiempo tarda el navegador tarda en calcular todas las etiquetas.
    
    -Painting: cuando terminó de hacer rendering y te mide cuanto tarda el motor de css,
    cuánto tarda en ponerle todo el estilo con css.
    
    -Cuando modificamos un elemento que ya existe en el DOM, se tiene que
    activar nuevamente el Rendering y el Painting.

-Un fragmento es como una etiqueta pero en sí no la es. Tiene funciones
de una etiqueta, de un nodo. Sirven para crear estructuras dentro de esta
etiqueta "que no existe" y después las volcamos en el DOM.
    -Es recomendable si queremos hacer un cambio, para aumentar la perfomance,
    hacer un queryselector a un elemento, crear un fragmento y volcar el elemento
    ahí y trabajar sobre este "espacio" para luego volcarlo en el DOM
    
*/

//Creo mi elemento

//let ul = document.createElement("ul")
//let ul = document.querySelector("ul")


//let fragmento = document.createDocumentFragment()

//for(let i = 0; i < 10; i++)
//{
//    let li = document.createElement("li")
//    li.innerText="Elementos " + i
//    //ul.appendChild(li)
//    fragmento.appendChild(li)
//}

//Al hacer esto sólo hago una modificación SOLA sobre un elemento
//ul.appendChild(fragmento)
//console.log(fragmento)
//let body = document.querySelector("body")

//Funciones
//function suma (x, y)
//{

    //return x + y
    /*
    Si la función no tiene retorna, tiene undefined
    */
//}

//let resultado = suma(1, 2)

//let foo = function() {console.log("hola")}
//foo.x=true

//console.log(foo)


//Eventos
let button = document.getElementById('boton')
//No ejecuta todos los clicks porque devuelve undefinid como en las funciones sino tiene retorno
button.onclick = console.log('Hola desde js')

//Otra forma de hacerlo no tan correcta pero aceptada
function mostrarSaludoConParametro(param){
    console.log("Hola mundoooo")
    console.log(param)
}

function segundaFuncion(){
    mostrarSaludoConParametro("Desde la segunda funcion")
}

// //Forma más correcto de hacerlo - Nombre del evento no es onclick es click
button.addEventListener("click", (param) => {
    mostrarSaludoConParametro("ChauMundo")
})

/*Si la función va a ser una única cosa, realizar así como función
anónima ya que se ejecuta, vive y después muere.
-el parámetro E es de EVENTO y siempre llega a la función
*/

button.addEventListener('click', (e) => {
    console.log(e)
    //Se detiene la propagación del evento
    e.stopPropagation()
    console.log("Nuevo evento de click!")
})

button.addEventListener('click', segundaFuncion)

///EJERCICIO CREAR UN POP UP DE CONFIRMACIÓN CON JAVASCRIPT

let a = document.querySelector('a')
//el e y el a apuntan a lo mismo
a.addEventListener('click', (e)=>{
    //Detengo la propagación del evento
    e.stopPropagation()
    //Prevengo el comportamiento por default
    e.preventDefault()

    //Crear un mensaje en la pantalla
    let body = document.querySelector('body')
    let nuevo_parrafo=document.createElement('p')
    let nuevo_div=document.createElement('div')
    let botonCancelar=document.createElement('button')
    let botonAceptar=document.createElement('button')
    
    nuevo_div.className="modal"
    nuevo_parrafo.innerText="¿Está seguro de que desea salir?"
    botonCancelar.innerText="Cancelar"
    botonAceptar.innerText="Aceptar"

    botonAceptar.addEventListener('click',()=> {
        //rescato el link y lo uso
        location.href=a.href
    })

    botonCancelar.addEventListener('click', ()=> {
        //Borro el div cuando se hace click en cancelar
        body.removeChild(nuevo_div)
    })

    nuevo_div.appendChild(nuevo_parrafo)
    nuevo_div.appendChild(botonAceptar)
    nuevo_div.appendChild(botonCancelar)

    body.appendChild(nuevo_div)

})

a.addEventListener('mouseenter', ()=>{
    console.log("estoy encima del link")
})

a.addEventListener('mouseleave', ()=>{
    console.log("me fui del link")
})

//Evento del BOM
// window.addEventListener("resize", ()=>{
//     //console.log("cambio de tamaño")
//     //console.log(`${outerWidth}px X ${outerWidth}px`)
// })

//Que pase algo cuando cargue todo el Body
//window.addEventListener("load", ()=>{
//    console.log(document.body)
//})

//Formulario - sin el action es la manera estándar
/*
    -Sin el action va a la misma página
    -Importante ponerle el id a los inputs para acceder adentro
*/
let form = document.querySelector("form")

//escucho el evento submit del formulario
form.addEventListener("submit", (e)=>{
    e.stopPropagation()
    e.preventDefault()
    
    //Agarro los elementos del form
    //console.log(form.elements)
    //console.log(form.elements.nombre)
    //console.log(form.elements[0])

    //let nombre = form.elements.nombre.value
    let nombre = e.target.nombre.value;
    
    if(nombre != "fede")
    {
        alert("El nombre no es correcto")
    }
})