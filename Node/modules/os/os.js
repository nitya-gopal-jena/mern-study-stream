
const os = require('os')


console.log('Total memory: ', os.totalmem());
console.log('Free Memory: ', os.freemem());
console.log('Total Cpus: ', os.cpus().length);
console.log('Host Name: ', os.hostname());
console.log('Which OS Type: ', os.type());
console.log('Architecture: ', os.arch());




