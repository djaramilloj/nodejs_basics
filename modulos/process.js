// testeo intensivo 
process.on('uncaughtException', (err, origen) =>  {
    console.log('se olvido un error'); 
    console.error(err);
})

process.on('beforeExit', () =>  {
    console.log('el proceso va a acabar');  
})

process.on('exit', () =>  {
    console.log('el proceso acabo');  
})

funcionjejeje();
