let form = document.querySelector('form')

let inputNombre = form.elements.nombre
let inputApellido = form.elements.apellido
let inputArchivo = form.elements.archivo
let select = form.elements.opciones
let checkbox_uno = form.elements.opcion_uno
let checkbox_dos = form.elements.opcion_dos

/*
-Validación formularios

*/




////////////////////

/*
Digo que cuando no está usando más el nombre es decir
cuando está en blur, puedo empezar a validar el campo anterior

*/
// inputNombre.addEventListener('blur', ()=>{
//     console.log("Validando nombre...")
// })

// checkbox_uno.addEventListener("change", ()=>{
//     console.log("Change!")
//     console.log(opcion_uno.value)
//     console.log(checkbox_uno.checked)
// })

/*Change cuando el valor completo del control 
de un formulario cambia, se dispara un change
-Con los select y el change se le asigna al change al select
*/
// select.addEventListener('change', ()=>{
//     console.log(select.value)
// })

/*
-Cuando el input es de tipo file, tengo que usar
el objeto files

*/
// inputArchivo.addEventListener('change', ()=>{
//     console.log(inputArchivo.files)
// })


//Keydown: se dispara cuando la tecla recién se está apretando

// inputNombre.addEventListener('keydown', (e)=>{
//     console.log("Tecla: " + e.key)
//     console.log("Value: " + inputNombre.value)
//     console.log("******************************")
    
// })

//Keyup se dispara cuando la tecla se soltó

// inputNombre.addEventListener('keyup', (e)=>{
//     console.log("Tecla: " + e.key)
//     console.log("Value: " + inputNombre.value)
//     console.log("******************************")
    
// })

//Propiedades comunes:
/*
    Event.target
    Event.preventDefault()
    Event.stopPropagation()
*/


////////////// EJEMPLO DE VALIDACIÓN

/*
-string.lengh devuelve la cantidad de letras de un string
-string.trim() - devuelve el mismo string pero sin espacios adelante ni atrás
-string.includes(x) - boolean, busca si x se encuentra en el string.
También sirve para arrays. Para saber si hay un cierto elemento dentro
de un array.
-string.indexof(x) - busca si X está en el string o array
y me da su índice, sino lo encuentra devuelve -1
-string.substr()
-string.charCodeAt() me dice que de la "a" a la "z" me devuelve un número
la a 97 y la z es 122
Con la "A" mayúsucula a la "Z" mayúsculas va de la 65 a 90
*/

// let valor = " Fed er i  "

// console.log(valor.length)
// //console.log(valor.trim())
// valor = valor.trim()
// console.log("Espacios: ", valor.includes(" "))
// console.log("Existe: ", valor.indexOf(" "))
// console.log("Existe: ", valor.indexOf("z"))

// let primer_espacio = valor.indexOf(" ")
// let stringCortado=valor.substr(primer_espacio+1)
// let segundoEspacio=stringCortado.indexOf(" ")
// console.log("Primer espacio", primer_espacio)
// console.log("segundo espacio: ", segundoEspacio)
// let letra = valor[0]
// if(segundoEspacio !== -1)
// {

// }

// for(let i=0; i<valor.length; i++)
// {
//     let letra = valor[i]
//     let codigo=letra.charCodeAt()
//     console.log(letra, codigo)
//     //condiciones
// }
