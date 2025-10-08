
const fs = require('fs');


// Creating file using Synchronous

console.log("start");
try {
    fs.writeFileSync('./demo.txt', 'Hello World!')
    console.log("File Created Successfully");
    
} catch (error) {
    console.log('File Not Created Something Went Wrong', error.message);
    
}
console.log("End");








