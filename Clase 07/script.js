/*
    -No se le puede hacer un bucle for o foreach a un objeto
    -Se usa un For... in
    -otra forma es con el Object.keys(objeto)
*/

let objeto = {
    x: 1,
    y: 2,
    z: 3
}

for (prop in objeto)
{   
    //console.log(prop)
    //console.log(objeto[prop])
}
console.log("*****************")
//Esto retorna un array
Object.keys(objeto).forEach((prop)=>{
    //console.log(prop)
    //console.log(objeto[prop])
})


//Operador ternario
let resultado = 1 > 2 ? "Mayor" : "Menor";
//console.log(resultado)

/////////AJAX PARA SUBIR IMÁGENES


let div = document.getElementById("dropzone")
let input = div.children[1]

//PARA SUBIR UNA IMAGEN COMÚN, UNA
input.addEventListener("change", (evento)=>{
    evento.stopPropagation()
    
    let archivos = evento.target.files
    manejarSubida(archivos)
})

/*
    drageneter: cuando el cursor entra del lugar de dropeo
    dragleave: cuando el cursor sale del lugar de dropeo
    
    ESTOS DOS SE TIENEN QUE CANCELAR PARA HACER EL DRAG AND DROP
    dragover: cuando el cursor permanece por encima de la zona de drop
    drop: cuando se dropea
*/

div.addEventListener("dragover", (evento)=>{
    evento.preventDefault()
    evento.stopPropagation()
})

div.addEventListener("drop", (evento)=>{
    evento.preventDefault()
    evento.stopPropagation()
    let archivos = evento.dataTransfer.files
    manejarSubida(archivos)
})

function manejarSubida(archivos)
{
    let data = new FormData()

    for(let i = 0; i < archivos.lenght; i++)
    {
        let archivo = archivos[i]
        
        //Para agregar datos al data
        //FormData.append(nombreParametro string, valor)
        data.append(`Archivo-${i}`, archivo)
    }

    let xhr = new XMLHttpRequest()
    //SE PUEDEN MANDAR A UN SERVIDOR
    xhr.open("POST", "subida.php")

    //si quisiera saber cuánto va el progreso de subida
    xhr.upload.addEventListener("progress", ()=>{
        //La implementación de este progreso es la misma que en la descarga
        //LO QUE CAMBIA ES QUE APUNTA A ESTE OBJETO XHR
    })

    xhr.send(data)

    /*
    PROBAR ESTE EJEMPLO CON PHP AL SUBIR LA IMAGEN
    AL SERVIDOR

    línea en php:
    foreach ($_FILES as $archivo){
        move_uploadded_file($archivo["tmp_name"], $archivo["name"])
    }

    con esta línea debería subir por ajax a mi servidor local la imagen

    */
}


