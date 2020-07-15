function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`hola ${nombre}`)
            reject();
        }, 1000);
    }) 
}

function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`hola estoy habando bla bla`)
            resolve(nombre);
        }, 1000);
    })
}


function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`adios ${nombre}`);  
            resolve();     
        }, 1000);
    })
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


console.log('iniciando');

hola('juan')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(() =>  {
        console.log('terminado el proceso');
    })
    .catch((error) => console.error('ha habido error'))
    