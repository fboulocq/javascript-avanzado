// let input = document.getElementById("file");
// let div = document.getElementById("idDiv");
// let fileImg = document.getElementById("fileImg");
// input.addEventListener("change", (e) =>{
//     e.preventDefault();
//     e.stopPropagation();

//     let archivo = e.target.files[0];
//     let reader = new FileReader();
//     reader.addEventListener("load", (e) =>{
//         console.log(e.target);
//         fileImg.setAttribute("src", e.target.result)
//     })


//     console.log(archivo);
    
// })

//Scope: global, local, closure
/*
    -Closure: 
    ¿Qué es?: es un espacio en memoria.
    ¿Cómo se genera?: cuando una función es creada dentro de otra función.
    ¿Para qué sirve?: para guardar variables y que nadie las pueda tocar.

    -Que necesito yo para existir a futuro.
    En el ejemplo de abajo, la variable "a" quedó viva en el closure de
    interna. Está encapsulada en interna. Puedo acceder al valor pero no lo puedo modificar.

*/
//#region ... JAVASCRIPT POO ...
function externa() //global y local
{
    //Propiedades privadas
    let a = 1;
    let b = 2;

    //Método prviado
    let inetrna = function(){ //global, local | closure
        console.log(a);
    };

    let resultado = {
        //Propiedad pública
        a : a,
        //Método público
        verA : inetrna
    }

    return resultado;
}

let res = externa();

//#endregion

/*
    Contexto: (propio de JS)
    -Por defecto es una variable {this} que apunta al objeto que contiene a la misma función.
    Si la función no tiene contexto, siempre tiene el objeto global.
    -Las únicas funciones que no cambian de contexto NUNCA son las funciones flecha.
    -
*/

// function foo()
// {
//     console.log(this);
// }

let obj = {
    x: 1,
    fn : function()
    {
        console.log(this)
        
        //let a = this;

        // setTimeout(function(){
        //     //console.log(this);
        //     console.log(a);
        // },0);

        setTimeout(()=>{
            console.log(this);
        })
    }
}
//obj.fn();
/*
    -5 formas de ejecutar una función
*/
function verContexto(a, b){
    console.log(a,b);
    console.log(this);
}
//Nartual
//verContexto(1,2); //1, 2 y window

//Fn.call() | fn.apply() | fn.bind() | new fn()

/*
    -fn.call() | el primer parámetro de call es lo que vos querés que valga el this. Siempre tiene que ser un objeto.
    Y sino lo es, JS te lo transforma.
    -Los próximos valores son los de la función

*/
//verContexto.call("call", 1, 2);

/*
    fn.aplly():
    -el primer parámetro toma el valor del this.
    -los parámetros de la función se pasan por array
*/
//verContexto.apply("apply", [1, 2]);

/*
    fn.bind():
    -La única diferencia de tanto apply como call es que te retorna a vos una copia exacta
    de la función de donde salís en la cual ya está linkeada con los parámetros a y b.
    -Sirve para optimar las ejecuciones ya que te hace una copia. 
*/
//let copia = verContexto.bind("bind", 1, 2);

function hacerClick(a){
    console.log(a);
}

//document.addEventListener('click', hacerClick(1));
// document.addEventListener('click', ()=>{
//     hacerClick(1);
// });
// let copia_hacer_click = hacerClick.bind(null, 1);
// document.addEventListener('click', copia_hacer_click);

/*
    new Function: crea un objeto nuevo, ejecuta la función que tiene al lado
    y le pasa como contexto ese objeto que creó. Al terminar la ejecución nos retorna el
    contexto. 
*/

//Función constructora
function usuarios(nombre, edad)
{
    this.nombre = nombre;
    this.edad = edad;
}

let federico = new usuarios("Federico", 27);
let rober = new usuarios("Roberto", 55);