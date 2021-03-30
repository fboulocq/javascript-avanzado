/*

    -Función constructora, con el operador new adelante.
    -La función flecha no puede ser constructora. Están ligadas a un sólo contexto,
    a donde pertenece o nacieron.
    -Las funciiones constructoras empiezan con la primera letra en mayúscula.
    -Si para todas las instancias voy a tener propiedades exactamente iguales, entonces
    las tengo que poner en su prototipo.


*/
function Usuarios(nombre, edad)
{
    //Propiedad privada
    let n = nombre;

    //Propiedades públicas
    this.nombre = nombre;
    this.edad = edad;
    this.getNombreThis = function()
    {
        console.log(n);
    }

    Usuarios.prototype.getNombre = function(){
        console.log(this.n);
    }

    Usuarios.prototype.saludo = function(){
        console.log(`Hola ${this.nombre} ${this.edad}`)
    }
}

let federico = new Usuarios("Federico", 27);
let rober = new Usuarios("Roberto", 55);

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

let a = Object.create(null, {
        x : {
            value : 1
        }
    });

