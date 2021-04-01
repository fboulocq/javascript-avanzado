/*

    -Función constructora, con el operador new adelante.
    -La función flecha no puede ser constructora. Están ligadas a un sólo contexto,
    a donde pertenece o nacieron.
    -Las funciiones constructoras empiezan con la primera letra en mayúscula.
    -Si para todas las instancias voy a tener propiedades exactamente iguales, entonces
    las tengo que poner en su prototipo.


*/
//Modelo clásico
// function Usuarios(nombre, edad)
// {
//     //Propiedad privada
//     let n = nombre;

//     //Propiedades públicas
//     // this.nombre = nombre;
//     this.edad = edad;
    
//     Object.defineProperty(this, 'nombre', {
//         value : nombre,
//         enumerable : true
//     });

//     this.getNombre = function()
//     {
//         console.log(n);
//     }

//     Usuarios.prototype.getNombre = function(){
//         console.log(this.n);
//     }

//     Usuarios.prototype.saludo = function(){
//         console.log(`Hola ${this.nombre} ${this.edad}`)
//     }

//     return Object.freeze(this);
// }

// let federico = new Usuarios("Federico", 27);
// let rober = new Usuarios("Roberto", 55);

//Para crear propiedas en objetos
// let a = {x: 1}
// a.y = 2;
// a["z"] = 3;

// for(prop in a)
// {
//     console.log(prop)
//     //Para borrar 
//     delete a.z
// }

/*
    Object.create() => Crea un objeto definido por el segundo parámetroel cual 
    nos permite configurar cada propiedad con los atributos de propiedades de objeto.
    El primer parámetros nos srive para decirle cuál va a ser su prototipo

    -En este caso ya tengo el objeto pero le quiero definir la propiedad
    Object.definiProperty(a, "y", {
        value:2
    })
*/

// let a = Object.create(null, {
//     x : {
//         value : 1,
//         writable : false, //No se va a poder sobreescribir - Por defecto en false
//         enumerable : false, //Permisos de iterabilidad - Por defecto en false
//         configurable = false //Permitos de borrado - Por defecto en false
//     }
// });

// let a = Object.create(null, {
//         x : {
//             value : 1
//         }
//     });

// a.z = true;

// Object.defineProperty(a, 'y',{
//     value : 2
// })

//Seguridad

//No me permite seguir agregando cosas.
//Object.preventExtensions(a);

//Object.seal(a);

/*
    Previene que nuncas propiedades se puedas agregar y todas las propiedades
    existente sean no configurables.
    Además te permite cambios de otros atributos
*/
//Object.freeze(a);

//Modelo ESC6

/*
    -Modelo clásico

    function Usuario(nombre, edad)
    {
        this.nombre = nombre;
        this.edad = edad;
        Usuario.prototype.saludo = function() {}
    }

*/

//Modelo ES6

//Función autoinvocada
//(function (){ código adentro })
//IIFE = Inmediatly invoke function expression
//Cuando termina se destruye
//Generamente va sin nombre
(function ()
{
    class Usuarios
    {
        constructor(nombre, edad)
        {
            this.nombre = nombre;
            this.edad = edad;
        }

        //Usuario.prototype.saludo = function() {}
        saludo()
        {
            console.log("hola");
        }
    }
})


/*
    -Sirve para detectar errores invibles.
    -Siempre va al principio del script
*/

//"use strict"

//a = true;