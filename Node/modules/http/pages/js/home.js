

let count = 0;

let btn = document.getElementById('btn');
let counter = document.getElementById('counter');

btn.addEventListener('click', () => {
    count++;
    counter.textContent = `Count:${count}` 
    
})