
const path = require('path')

let mypath = 'assets/images/hero.jpeg'

console.log(path.dirname(mypath));
console.log(path.extname(mypath));
console.log(path.basename(mypath));


console.log(path.join('backend', 'src', mypath));
