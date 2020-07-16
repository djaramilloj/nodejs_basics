const os = require('os');

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.cpus());
const SIZE = 1024;
function kb(bytes){
    return bytes / SIZE;
}

function mb(bytes){
    return kb(bytes) / SIZE;
}

function gb(bytes){
    return mb(bytes) / SIZE;
}

const result =kb(os.freemem());
const result1 =mb(os.freemem());
const result2 =gb(os.freemem());

console.log(result, result1, result2);
console.log(gb(os.totalmem()));


console.log(os.networkInterfaces ())
