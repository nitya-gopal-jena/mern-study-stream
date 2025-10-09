

const { error } = require('console');
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



// Append file Synchronously

console.log('Start');

try {
    fs.appendFileSync('../demo.txt', 'This is append data');
    console.log('Data appended in file sync')
} catch (error) {
    console.log('Data not appended', error.message);
    
}
console.log('End');




// Append file Asynchronously

console.log('Start');

fs.appendFile('../demo.txt', 'This is append data', (error) => {
    if (error) {
        console.log('Data not appended in file ');
       
    } else {
        console.log('Data appended successfully');      
    }
})

console.log('End');




// Create a copy of the file synchronously

fs.linkSync('../demo.txt', '../link.txt')


// Create a copy of the file asynchronously

fs.link('../demo.txt', '../link2.txt', (error) => {
    if (error) {
        console.log('Link file not created');
        
    } else {
        console.log('Link file created');
        
    }
})