function otraFuncion() {
    return seRompe();
}

function seRompe(){
    return 3 + d;
}

function seRompeAsync(cb){
    setTimeout(()=> {
        try {
            return seRompe();
        }catch (err) {
            console.error('se rompio todo');
            cb(err)
        }
    }, 1000)
}

try {
    
   seRompeAsync((err)=> {
       console.log(`hubo un error: ${err.message}`)
   });
   
   setTimeout(() => {
       console.log('holi');
       
   }, 2000);
   otraFuncion();
}catch (error) {
    console.error('algo se rompio')
}