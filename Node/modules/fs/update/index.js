

const { log } = require('console');
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


// Updated data file Asynchronously

console.log("Start");
fs.writeFile('../demo.txt', 'This is new updated data', (error) => {
    if (error) {
        console.log('File data not updated');
        
    } else {
        console.log('data updated');
        
    }
})

console.log("End");



