
const fs = require('fs');

// Read file data Asynchronously 

console.log('Start');
const data = fs.readFile('./demo2.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log('File can not read successfully', error.message);

    } else {
        console.log(data);
    }
})


console.log('End');
