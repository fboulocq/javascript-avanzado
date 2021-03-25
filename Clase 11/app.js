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
    //Propiedades públicas
    this.nombre = nombre;
    this.edad = edad;

    //Propiedad privada
    let n = nombre;

    Usuarios.prototype.getNombre = function(){
        console.log(this.n);
    }

    Usuarios.prototype.saludo = function(){
        console.log(`Hola ${this.nombre} ${this.edad}`)
    }
}

let federico = new Usuarios("Federico", 27);
let rober = new Usuarios("Roberto", 55);