

const fs = require('fs');

// Updated file data Synchronously 

console.log("Start");
try {
    fs.writeFileSync('../demo.txt', 'Today is thursday');
    console.log('File updated successfully');
} catch (error) {
    console.log('File does not updated', error.message);
    
}

console.log("End");



