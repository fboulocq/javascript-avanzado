//https://docs.emmet.io/cheat-sheet/
//https://threejs.org/

/*
Tipos de datos:

PRIMITIVOS: SE PASAN POR VALOR (debo cambiar en cada uno el valor)
    -String: "", '', ´´
    -Number: 1, 1.1, -4
    -Boolean:
        -{True|!False} {False|null|undefined|""|0|NaN}
    -null: asignación
    -undefined: lectura
    -Symbol: propiedades para un objeto y que no muten (no lo vamos a usar)

OBJETOS: SE PASAN REFERENCIA (si cambio uno se cambio en todos lados el objeto)
    son unidaddes que pueden tener propiedades y a ellas asignarles valores
    -Object: { nombre: "Federico", edad: 27 }
    -Array: ["Federico", 30]
    -Function: 
        -function foo(){}

WEB APIS: programas que se crean en el navegador. Javascript puede usarlas
    Ejemplo: https://developer.mozilla.org/es/docs/Web/API
    -DOM (Document object model)
    -BOM (Browser object model)
    -Event
    -Ajax
*/

/*
Tipos de Variables: | no es recomendable usar el ámbito Global de variables
    -var (global)
    -let (local)
    -const (local)
        -no se le puede cambiar el valor

    Regla: (para proteger las variables)
        1-Si podes usar cons mejor
        2-Sino podes usar const usar let. 
        3-NO usar var
*/

//VAR
// if(true)
// {
//     var b = true
//     //console.log(b)
// }
//console.log(b)

//LET - No puedo reinicializar la variable para "pisarla" poniendo el mismo valor
//let a = 10
//let a = 20
// if(true)
// {
//     let c = true
//     console.log(c)
// }
//console.log(c) //da error porque el ámbito de let es local, es decir dentro del if

//OBJETOS
let f = { nombre: "Federico", edad: 27 }
let indice = "nuevo valor"
//Notación de punto y corchete

    //NOTACIÓN DE PUNTO
    //Objeto.propiedad (como get y set)
    //GET
        //console.log(f.nombre)
    //SET
        f.vive=true
        //NO SE PUEDEN PONER PROPIEDADES NUMÉRICAS f.100=true
        //NO PUEDO CREAR UNA PROPIEDAD VARIABLE

    //NOTACIÓN DE CORCHETE
    //objeto[propiedad]
    //GET
        //console.log(f["nombre"])
    //SET
        f["edad"] = 40
        //SI SE PUEDEN HACER PROPIEDADES NUMÉRICAS 
            f[100] = true
        //PUEDO USAR UNA PROPIEDAD "VARIABLE" PARA CREAR UN OBJEO
            f[indice] = "se creo!"
//console.log(f)

/*Windows - El objeto global windows es una representación del navegador - BOM - Browser objet Model
    -Las varibles con VAR me sobrecargan windows
        -Ejemplo:
        //var r = true
        //Estoy diciendo:
        //windows.g

    windows.innerWitdth = number (el ancho interno del navegador)
    windows.innerHeight = number (el alto interno del navegador)
    windows.outerHeight = number (el alto del navegador)
    windows.outerWitdth = number (el ancho del navegador)

    Screen = screen
    windows.screen.width = number (el ancho del hardware)
    windows.screen.height = number (el alto del hardware)

    Location = location
    windows.location.href = string  (consultamos y reedirigimos al usuario)

    History = history (sirve para manejar tu historial como manejar tus "pasos")
    windows.history.back() = nos devuelve para atrás en el historial
    windows.history.forward() nos mueve para adealatne en el historial

    Document = document - DOM (Document object Model) funciones que vamos a usar para interactuar con el DOM
    -windows.document - o solo document
    
    
*/

//Para ver en forma de objeto:
//console.dir()

//Agarrar nodos (etiquetas de html)
    
    //obtengo el id del elemento y puedo acceder a sus atributos
        //let parrafo_uno = document.getElementById("parrafo-1")
        //parrafo_uno.innerText="Nuevo párrafo uno"

    //obtengo todos los tags en un array
        //let parrafo_uno = document.getElementsByTagName("p")
        //parrafo_uno[0].innerText="nuevo parrafo con tagname"

    //obtengo todas las clases en un array
        //let parrafo_uno = document.getElementsByClassName("parrafo")
        //parrafo_uno[0].innerText="holaaaaaa"
    
    //puedo escribir cualquier selector de CSS
        //let parrafo_uno = document.querySelector("#parrafo-1")
        //parrafo_uno.innerText="holaaaa2"

    //console.log(parrafo_uno.id)
    //console.dir(parrafo_uno)


/*
    Creación de Nodos - Funciones para crear nodos
        -Creo mi nodo
        -obtengo mi elemento
        -agrego mi nuevo elemento


*/

let nuevo_parrafo = document.createElement("p")
nuevo_parrafo.innerText="Nuevo parrafo creado"

let body = document.querySelector("body")
body.appendChild(nuevo_parrafo)

//CREO UN NODO ANTES DE UN ELEMENTO
//NodoTarget.inserBefore(nodoNuevo, Nodoreferencia)
let nuevo_parrafo2=document.createElement("p")
nuevo_parrafo2.innerText="Otro parrafo nuevo despues creado"
let primer_parrafo = document.querySelector("#parrafo-1")
body.insertBefore(nuevo_parrafo2, primer_parrafo)


//PARA BORRAR UN ELEMENTO
//NodoTarget.removeChild(nodo)
let segundo_parrafo = document.getElementById("parrafo-2")
body.removeChild(segundo_parrafo);

//CAMBIAR EL ID
let tercer_parrafo = document.getElementById("parrafo-3")
tercer_parrafo.id="activo"


console.log(nuevo_parrafo)