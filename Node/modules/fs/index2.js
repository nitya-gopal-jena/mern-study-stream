
const fs = require('fs')
// Creating file Asynchronously

console.log("Start");

fs.writeFile('./demo2.txt', 'Hello this is demo2 txt file', (error) => {
    if (error) {
        console.log('File not created something went wrong', error.message);
        
    } else {
        console.log('File Created Successfully');
        
    }
})

console.log('End');
