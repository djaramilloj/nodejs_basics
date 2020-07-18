const http = require('http');

http.createServer(router).listen(3000)

function router(req, res) {
    console.log('nueva peticion')
    console.log(req.url);

    switch(req.url){
        case '/hola':
        let saludo = hola();
            res.write(saludo)
            res.end();
            break;
        default:
            res.write('error 404')
            res.end();
    }
}


function hola(){
    return console.log('hola que tal'); 
}


console.log('escuchando http en el puerto 3000');
