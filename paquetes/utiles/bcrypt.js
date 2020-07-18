const bcrypt = require('bcrypt');

const password = '123456';

bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash); 

    bcrypt.compare('123456', hash, (err, rta)=>{
        console.log(err);
        console.log(rta);
    })
})