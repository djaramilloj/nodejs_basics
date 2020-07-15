function soyAsync(nombre, callback){
    setTimeout(() => {
        console.log(`hola ${nombre}`)
        callback(nombre);
    }, 1000);
}

function adios(nombre, callback){
    setTimeout(() => {
        console.log(`adios ${nombre}`);  
        callback();     
    }, 1000);
}


soyAsync('juan', function(nombre){
    adios(nombre, function () {
        console.log('terminando....')
    })
});