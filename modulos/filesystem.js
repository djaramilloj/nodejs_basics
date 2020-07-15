const fs = require('fs');

const leer= (ruta, callback) => {
    fs.readFile(ruta, (err, data )=> {
        console.log(data.toString());
    })
}

const escribir = (ruta, contenido, callback) => {
    fs.writeFile(ruta, contenido, (err) => {
        if(err){
            console.error('no pude escribirlo, '+ err)
        }else {
            console.log('todo funcionó')
        }
    })
}


const borrar = (ruta, callback) => {
    fs.unlink(ruta, (err) => {
        if(err){
            console.error('no pude borrarlo: '+ err)
        }else {
            console.log('todo funcionó')
        }
    })
}


borrar(`${__dirname}/archivo1.txt`, console.log)

