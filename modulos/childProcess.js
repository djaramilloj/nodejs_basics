const { exec, spawn } = require('child_process');

// exec('node modulos/consola.js', (err, stdout, stderr) => {
//     if(err){
//         console.error(err);
//         return false
//     }

//     console.log(stdout);
// })


let process = spawn('ls', ['-la']);

console.log(process.connected);

process.stdout.on('data', (dato) => {
    console.log(dato.toString())
})

process.on('exit', () => {
    console.log('termines')
    console.log('esta muerto??')
    console.log(process.killed)
})