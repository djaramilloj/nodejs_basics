let suma = 0;
console.time('bucle');
for (let i = 0; i< 100000000; i++){
    suma++;
}

function async(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('termine async');
            resolve();
        }, 1000);
    })
}

async().then(() => {
    console.timeEnd('bucle');
    
})
