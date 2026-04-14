let arr = [4, 5, 6, 5, 8];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (!newArr.includes(arr[i])) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);
