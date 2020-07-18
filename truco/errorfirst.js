function asincrona(callback){
    setTimeout(() => {
        try {
            let a = 3+z;
            callback(null, a)
        }catch(error) {
            callback(error);
        }
    }, 1000);
}

// try{
//     asincrona((error, dato) => {
//         if(error){
//             // console.error('tenemos un error');
//             // console.error(error)
//             // return false;
//              throw error; // EN ASINCRONISMO NO VA A FUNCIONAR, TRY CATCH NO SIRVE CON ASINCRONISMO
//         }else{
//             console.log('todo estuvo bien, mi data es: '+ dato);
//         }
//     });
// }catch(error) {
//     console.error('he capturado un error');
// }


asincrona((error, dato) => {
            if(error){
                console.error('tenemos un error');
                console.error(error)
                return false;
            }else{
                console.log('todo estuvo bien, mi data es: '+ dato);
            }
        });
