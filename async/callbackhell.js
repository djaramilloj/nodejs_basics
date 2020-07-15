function soyAsync(nombre, callback){
    setTimeout(() => {
        console.log(`hola ${nombre}`)
        callback(nombre);
    }, 1000);
}

function hablar(callback){
    setTimeout(() => {
        console.log(`hola estoy habando bla bla`)
        callback();
    }, 1000);
}


function adios(nombre, callback){
    setTimeout(() => {
        console.log(`adios ${nombre}`);  
        callback();     
    }, 1000);
}


function conver(nombre, veces, callback) {
    if (veces > 0){
        hablar(() => {
            conver(nombre, --veces, callback);
        })
    }else {
        callback(nombre);
    }
    
}

// soyAsync('juan', function(nombre){
//     hablar(() => {
//         hablar(() => {
//             hablar(() => {
//                 adios(nombre, function () {
//                     console.log('terminando....')
//                 })
//             })
//         })
//     }) 
// });

soyAsync('juan', (nombre) => {
    conver(nombre, 3, () => {
        adios(nombre, () => {
            console.log('termino')
        })
    })
})