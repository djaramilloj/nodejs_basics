async function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`hola ${nombre}`)
            resolve(nombre);
        }, 1000);
    }) 
}

async function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`hola estoy habando bla bla`)
            resolve(nombre);
        }, 1000);
    })
}


async function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`adios ${nombre}`);  
            resolve();     
        }, 1000);
    })
}




async function main() {
    let nombre = await hola('juan')
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('after');
}

console.log('before');
main();


