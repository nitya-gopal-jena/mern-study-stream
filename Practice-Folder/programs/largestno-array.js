
let arr = [2, 3, 4, 5, 7, 8, 9, 10];
let largest = arr[0];

for (let i = 0; i < arr.length; i++){
    if (arr[i] >= largest) {
        largest= arr[i];
    }
}

console.log(largest);
