
const fs = require('fs');

// Read file data Synchronously 

console.log('Start');
try {
    const data = fs.readFileSync('./demo.txt', 'utf-8')
    console.log(data);
    
    
} catch (error) {
    console.log('File not read successfully', error.message);
    
}

console.log('End');

